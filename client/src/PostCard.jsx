import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
function PostCard({ id, title, postCommentList }) {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setComment(() => {
      return newValue;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/posts/comments",
        { id: id, content: comment }
      );
      setCommentList(response.data);
      setComment("");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  useEffect(() => {
    if(postCommentList){
       setCommentList(postCommentList)
    }
  }, []);
  return (
    <div style={{height:"100%",border:"solid 1px" ,margin:"5px", borderRadius:"5px"}}  >
      <h2>{title}</h2>
      <ul>
        {commentList.map((data, index) => {
          return <li key={index}>{data?.content}</li>;
        })}
      </ul>
      <form style={{border:"solid 1", padding:"3px" }}  onSubmit={handleSubmit}>
        <label htmlFor="">New Comment</label>
        <textarea className="form-control"onChange={handleChange} value={comment}></textarea>
        <button className="btn btn-primary" type="submit">Comment</button>
      </form>
      
    </div>
  );
}

export default PostCard;

import React, { useState } from "react";
import axios from "axios";

function CreatePost({setUpdateUi}) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/posts", { title });

      setTitle("");
      setUpdateUi((prev)=>{
           return !prev
      })
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={handleChange}
            className="form-control"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

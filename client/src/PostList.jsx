import React,{useEffect,useState} from 'react'
import PostCard from './PostCard';
import axios from "axios"
import "./Post.css";
function PostList({updataUi}) {
  const [postList,setPostList] = useState({});
  useEffect(()=>{
   const fetch = async ()=>{
   try {
      const queryReponse = await axios.get("http://localhost:4001/all-posts");
      console.log(queryReponse.data);
      setPostList(queryReponse.data)
    } catch (error) {
      console.error("Error occurred:", error);
    }
   }
   fetch()
  },[updataUi])
  return (
     <div className='d-flex flex-row flex-wrap justify-content-between'>{Object.keys(postList).map((postItem,index)=>{
        return <PostCard key ={index} id ={postItem} title = {postList?.[postItem]?.title}  postCommentList={postList?.[postItem]?.comments}/>
     })}</div>
  )
}

export default PostList
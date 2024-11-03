import React, { useState } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  const [updataUi,setUpdateUi]=useState(true)
  return (
    <ChakraProvider>
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost setUpdateUi={setUpdateUi} />
      <PostList updataUi={updataUi}/>
    </div>
    </ChakraProvider>
  );
}


export default App;



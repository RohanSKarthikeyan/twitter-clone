import React, { useEffect, useState } from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { collection, onSnapshot } from 'firebase/firestore';
import db from './firebase';
function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    onSnapshot(collection(db,"posts"),(snapshot)=>{
      setPosts(snapshot.docs.map(doc=>doc.data()));
      
    })
  },[])
  
  return (
    <div className='feed'>
    <div className='feedHeader'>
    <h2>Home</h2>
    <TweetBox/>
    {posts.map((post) =>{
      return(
      <Post displayName={post.displayName}
          userName={post.userName}
          text={post.text}
          image={post.image}
          verified={post.verified}
          avatar={post.avatar}
        />
      )
    })
    }
        
        
        
    </div>
    </div>
  )
}

export default Feed
import React from 'react'
import  './Post.css';
import { Avatar } from '@mui/material';
import { ChatBubbleOutline, FavoriteBorder, Repeat, VerifiedUser, Publish } from '@mui/icons-material';
function Post({displayName,userName,verified,text,image,avatar}) {
  return (
    <div className='postDiv'>
      <div className='postDp' >
        <Avatar src={avatar}/>
      </div>
      <div className='postContent'>
        <div className='postHead'>
          <div className='postHeaderText'>
          <h3>{displayName} {" "} <span className='postHeaderSpan'>{verified && <VerifiedUser className='postVerified'/>} {userName}</span></h3>
          <p>{text}</p>
          </div>
        </div>
    
        <img src={image} alt=""/>
        <div className='postFooter'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small'/>
          <FavoriteBorder fontSize='small'/>
          <Publish fontSize='small'/>
        </div>
      </div>
    </div>
  )
}

export default Post
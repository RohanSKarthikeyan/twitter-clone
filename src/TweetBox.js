import React, { useState } from 'react'
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { doc,setDoc, collection,addDoc } from 'firebase/firestore';




function TweetBox() {
  const [tweet,settweet] = useState(""); 
  const [image,setImage] =  useState("");



  const[displayName,setDisplay] = useState("");
  const[userName,setUser] = useState("");
  const[imageAdd,setImageAdd] = useState("");
const sendTweet=(e)=>{
  e.preventDefault();
  // const docRef = doc(db,"posts","tweet");
  const data = {
    displayName : displayName,
    userName: userName,
    text: tweet,
    image: image,
    verified : true,
    avatar : imageAdd
  }
  addDoc(collection(db, "posts"), data);

}

const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }
  return (
    <div className='tweetBox'>
    <div className='userGetter'>
    <div className='userInputs'>
    <input value={displayName} onChange={(e)=>{
            setDisplay(e.target.value)
        }} placeholder='Enter Display Name' disabled={disabled}/>
        <input value={userName} onChange={(e)=>{
            setUser(e.target.value)
        }} placeholder='Enter User Name' disabled={disabled}/>
        <input value={imageAdd} onChange={(e)=>{
            setImageAdd(e.target.value)
        }} placeholder='Enter DP URL' disabled={disabled}/>
        </div>
        <div className='userSubmit'>
          <Button onClick={handleGameClick}>Submit</Button>
        </div>
    </div>
    <form>
        <div className='tweetInput'>
            <Avatar src={imageAdd}/>
            <input onChange={(e)=> settweet(e.target.value)} value={tweet} placeholder="What's Happening"/>
        </div>
        <input value={image} alt="" onChange={(e)=>setImage (e.target.value)} className='tweetImg' placeholder='(Optional) Enter Image URL'/>
        <div className='tweetButton'>
            <Button onClick={sendTweet}>Tweet</Button>
        </div>
    </form>
    </div>
  )
}

export default TweetBox
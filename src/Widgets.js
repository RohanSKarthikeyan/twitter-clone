import { Search } from '@mui/icons-material'
import { height } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { TwitterTweetEmbed,TwitterShareButton,TwitterTimelineEmbed } from 'react-twitter-embed'
import './Widgets.css'

function Widgets() {
  const [tweetId,setId] = useState("");
  useEffect((e)=>{
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  setId(id.toString(16));
  })
  return (
    <div className='widgets'>
    <div className='wigetSearch'>
      <Search/>
      <input className='wigetSearch' placeholder='Search Twitter'/>
    </div>
    <div className='widgetContainer'>
      <h2>What's Happneing</h2>
      <TwitterTweetEmbed tweetId='1646107210202910721'/>
      <TwitterTimelineEmbed 
        sourceType="profile"
        screenName="_Chennaiyin_Guy"
        options={{height:400}}
      />
      <TwitterShareButton 
        url={'https://instagram.com/dr__drake_ramoray_?igshid=MjljNjAzYmU='}
        options={{text: "Haaland is awesome",via:"_Chennaiyin_Guy"}}
      />
    </div>
    </div>
  )
}

export default Widgets
import { Search } from '@mui/icons-material'
import { height } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { TwitterTweetEmbed,TwitterShareButton,TwitterTimelineEmbed } from 'react-twitter-embed'
import './Widgets.css'

function Widgets() {
  const [tweetId,setId] = useState("");
  return (
    <div className='widgets'>
    <div className='wigetSearch'>
      <Search/>
      <input className='wigetSearch' placeholder='Search Twitter'/>
    </div>
    <div className='widgetContainer'>
      <h2>What's Happneing</h2>
      <TwitterTweetEmbed tweetId='1646036517088018432'/>
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
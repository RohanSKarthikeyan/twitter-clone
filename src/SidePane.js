import React from 'react'
import { Twitter, Home, Search,NotificationsOutlined,MailOutline,BookmarkBorder,ListAlt,PermIdentity,MoreHoriz} from '@mui/icons-material'
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';
import './SidePane.css'
import { Navigate } from 'react-router-dom';
function SidePane() {
  const toAuth = (e)=>{
    Navigate("/auth");
  }
  return (
    <div className='sidebar'>
    <Twitter className='sidebar_twitter'/>

    <SidebarOption active text="Home" Icon={Home}/> 
    <SidebarOption text="Explore" Icon={Search}/> 
    <SidebarOption text="Notifications" Icon={NotificationsOutlined}/> 
    <SidebarOption text="Messages" Icon={MailOutline}/> 
    <SidebarOption text="Bookmarks" Icon={BookmarkBorder}/> 
    <SidebarOption text="Lists" Icon={ListAlt}/> 
    <SidebarOption text="Profile" Icon={PermIdentity}/> 
    <SidebarOption text="More" Icon={MoreHoriz}/> 
    <Button className="sidebar_tweet" fullWidth variant='outlined'>Tweet</Button>
    </div>
    
  )
}

export default SidePane
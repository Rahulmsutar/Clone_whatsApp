import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import SideBarChat from './SideBarChat'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import db from './Firebase'
import { useStateValue } from './StateProvider'

function SideBar() {
    const [rooms,setRooms]=useState([])
    const [ { user }, dispatch] = useStateValue();

console.log("UserPHOTOURL",user?.photoURL)
  useEffect(()=>{
   const unsubscribe= db.collection('rooms').onSnapshot(snapshot=>(
          setRooms(snapshot.docs.map(doc =>
            ({
                id: doc.id,
                data:doc.data()
            })))
      ))
      return () =>{
          unsubscribe()
      }
  },[])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="siderbar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="search or start new chat" type="text" />
                </div>

            </div>
            <div className="sidebar_chats">
                    <SideBarChat addNewChat/>
                    {
                        rooms.map(room =>(
                            <SideBarChat key={room.id} id={room.id} name={room.data.name}/> 
                        ))
                    }
            </div>


        </div>
    )
}

export default SideBar

import React,{useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post'
import './Feed.css';
import {db} from './firebase'

const Feed = () => {
 const [posts,setPosts] = useState([])

 useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc)=>(
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
 },[])

 const sendPost = (e) => {
     e.preventDefault()
     
 }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPost}>send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
        </div>
      </div>
       {posts.map((post)=>{
         return(
            <Post  />
         )
       })}
       <Post name='A Sivasankar' description='this is a test' message='wow this works' photoUrl='' />
    </div>
  );
};

export default Feed;

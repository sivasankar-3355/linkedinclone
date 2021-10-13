import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css'

const Sidebar = () => {

   const recentItem = (topic) => (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div> 
    )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://alexander-edu.org/en/wp-content/uploads/sites/4/2018/11/wallpaper2you_354945.jpg" alt="background" />
        <Avatar className="sidebar__avatar" />
        <h2>A Sivasankar</h2>
        <h4>shankarsiva608@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,434</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,524</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;

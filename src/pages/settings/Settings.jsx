import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.pexels.com/photos/4445705/pexels-photo-4445705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label >Username</label>
            <input type="text" placeholder="Aniruddha" />
            <label >Email</label>
            <input type="email" placeholder="aniruddha@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">
                Update
            </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

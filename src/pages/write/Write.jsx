import React from "react";
import "./write.css";
export default function Write() {
  return (
    <div className="write">
    <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </div>

        <div className="writeFormGroup">
            <textarea name="" id="" cols="30" rows="10" placeholder="Tell your Story" type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

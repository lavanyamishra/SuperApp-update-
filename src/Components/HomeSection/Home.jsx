import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UserInfo from "../HomeSection/UserCard/UserInfo";
import Weather from "../HomeSection/Weather/Weather";
import News from "../HomeSection/News/News";
import Timer from "./Timer/Timer";

const Home = () => {
  const [usernotes, setUsernotes] = useState();

  const handleNotesChange = (e) => {
    if (e.target.value === "") {
      return;
    } else {
      setUsernotes(window.localStorage.setItem("userNotes", e.target.value));
    }
  };
  let note = localStorage.getItem("userNotes");

  return (
    <div className="home_main">
      <div className="home_left">
        <div className="user_info">
          <div className="home_user">
            <UserInfo />
            <Weather />
          </div>
          <div className="notes">
            <h1>All Notes</h1>
            <textarea
              value={usernotes}
              onChange={handleNotesChange}
              name="notes"
              id="notes"
              cols="50"
              rows="10"
            >
              {note}
            </textarea>
            <div className="note_icon">
              <img src="/images/pencil.png" alt="" />
            </div>
          </div>
        </div>
        <div className="timer_div">
          <Timer />
        </div>
      </div>
      <div className="home_right">
        <News />
        <Link to="/movies">
          <button className="browes_btn">Browes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

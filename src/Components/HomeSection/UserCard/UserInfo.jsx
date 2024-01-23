import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const userGenere = JSON.parse(localStorage.getItem("userGenere"));

  return (
    <div className="userinfo">
      <div className="image_section">
        <img src="/images/userimage.png" alt="userimage" />
      </div>
      <div className="details_section">
        <p className="user_detail">{user.name}</p>
        <p className="user_detail">{user.email}</p>
        <h1>{user.username}</h1>
        <div className="selected_categorie">
          <div className="selected_genere">
            {userGenere?.map((value, i) => {
              return <p key={i}>{value}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

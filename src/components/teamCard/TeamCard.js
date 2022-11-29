import React from "react";

const TeamCard = ({ obj }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <img src={obj.img} alt="" />
        <h4>{obj.name}</h4>
        <span>{obj.role}</span>
        <p>{obj.disc}</p>
        <div className="social">
          <a target="_blank" rel="noreferrer" href={obj.twitter}>
            <i className="bi bi-twitter"></i>
          </a>
          <a target="_blank" rel="noreferrer" href={obj.facebook}>
            <i className="bi bi-facebook"></i>
          </a>
          <a target="_blank" rel="noreferrer" href={obj.instagram}>
            <i className="bi bi-instagram"></i>
          </a>
          <a target="_blank" rel="noreferrer" href={obj.linkedin}>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

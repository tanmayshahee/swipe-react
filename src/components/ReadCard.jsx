import React from "react";
import "../styles/read-card.scss";
const ReadCard = ({ data }) => {
  return (
    <div className={"read-card-main"}>
      <div className={"img-wrapper"}>
        <img src={data.imgurl} alt="rocket" />
      </div>
      <div className={"content"}>{data.content}</div>
    </div>
  );
};

export default ReadCard;

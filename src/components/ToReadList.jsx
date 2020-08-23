import React from "react";
import ReadCard from "./ReadCard";
import "../styles/toread-list.scss";
const ToReadList = ({ data }) => {
  const renderCard = (cardData) => {
    return <ReadCard data={cardData} />;
  };
  return <div className={"to-read-list-main"}>{data.map(renderCard)}</div>;
};

export default ToReadList;

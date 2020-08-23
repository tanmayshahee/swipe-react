import React from "react";
import Card from "./Card";
import "../styles/todo-list.scss";
import { SwipeableList } from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

const TodoList = ({ data }) => {
  const renderCard = (cardData) => {
    return <Card data={cardData} />;
  };
  return (
    <div className="todo-list-main">
      <SwipeableList>{data.map(renderCard)}</SwipeableList>
    </div>
  );
};

export default TodoList;

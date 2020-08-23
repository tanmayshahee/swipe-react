import React from "react";
import "../styles/card.scss";
import {
  SwipeableListItem,
  ActionAnimations,
} from "@sandstreamdev/react-swipeable-list";

const Card = ({ data }) => {
  const onComplete = (id) => {
    console.log(id);
  };
  return (
    <div className={"card-main"} key={data.id}>
      <SwipeableListItem
        swipeLeft={{
          content: <div onClick={() => onComplete(data.id)}>Completed</div>,
          actionAnimation: ActionAnimations.NONE,
          action: () => console.log(data.id),
        }}
        onSwipeProgress={(progress) =>
          console.info(`Swipe progress: ${progress}%`)
        }
      >
        <div className={"content-main"}>
          <div className={"title"}>{data.title}</div>
          <div className={"sub-title"}>{data.subtitle}</div>
          <div className={"time"}>{data.time}</div>
        </div>
        <div className={"swipe-area"}>
          <div>Swipe left</div>
        </div>
      </SwipeableListItem>
    </div>
  );
};

export default Card;

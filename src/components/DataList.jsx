import React from "react";
import TodoList from "./TodoList";
import todos from "../json/todo";
import toread from "../json/toread";
import { connect } from "react-redux";
import ToReadList from "./ToReadList";

const DataList = (props) => {
  return (
    <>
      {props.activeTab === "todo" ? (
        <TodoList data={todos} />
      ) : (
        <ToReadList data={toread} />
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ...props,
    activeTab: state.activeTab,
  };
};

export default connect(mapStateToProps, null)(DataList);

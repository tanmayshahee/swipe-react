import React from "react";
import { connect } from "react-redux";
import { setActiveTab } from "../action/index";
import "../styles/tabs.scss";
const Tabs = (props) => {
  const onTabSelect = (id) => {
    props.setActiveTab({ activeTab: id });
  };
  return (
    <div className={`tabs-container`}>
      <div
        className={`tab-main ${props.activeTab === "todo" ? "active-tab" : ""}`}
        onClick={() => onTabSelect("todo")}
      >
        To Do
      </div>
      <div
        className={`tab-main ${
          props.activeTab === "toread" ? "active-tab" : ""
        }`}
        onClick={() => onTabSelect("toread")}
      >
        To Read
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ...props,
    activeTab: state.activeTab,
  };
};

export default connect(mapStateToProps, { setActiveTab })(Tabs);

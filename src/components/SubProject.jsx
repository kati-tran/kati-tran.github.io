
import React, { useState } from "react";
import SubAllProjects from './SubAllProjects';
import SubWebProjects from './SubWebProjects';
import SubMobileProjects from './SubMobileProjects';
import SubGameProjects from './SubGameProjects';

const SubProject = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  let tabs = <SubAllProjects></SubAllProjects>;
  if (activeTab === "tab1") {
    tabs = <SubAllProjects></SubAllProjects>;
  } else if (activeTab === "tab2") {
    tabs = <SubWebProjects></SubWebProjects>;
  } else if (activeTab === "tab3"){
    tabs = <SubMobileProjects></SubMobileProjects>;
  } else{
    tabs = <SubGameProjects></SubGameProjects>
  }

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <div className="nav">
        <a
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}>
          ALL
        </a>
        <a
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}>
          Websites
        </a>
        <a
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => setActiveTab("tab3")}>
          Mobile
        </a>
        <a
          className={activeTab === "tab4" ? "active" : ""}
          onClick={() => setActiveTab("tab4")}>
          Games
        </a>
      </div>
      <div className="outlet">
        <div className="projectContainer">
          {tabs}
        </div>
      </div>
    </div>
  );
};

export default SubProject;
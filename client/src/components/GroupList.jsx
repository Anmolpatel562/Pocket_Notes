import React, { useEffect, useState } from "react";
import styles from "../component_css/GroupList.module.css";
import { getAllGroupsByDeviceId } from "../apis/Group";
import { setProfileLetter } from "../utility/ProfileLetter";

const GroupList = ({
  selectedGroup,
  setSelectedGroup,
  showModal,
  setShowModal,
  groupList,
  setGroupList,
}) => {
  useEffect(() => {
    fetchAllGroups();
  }, [selectedGroup, showModal]);

  const fetchAllGroups = async () => {
    const response = await getAllGroupsByDeviceId(
      localStorage.getItem("deviceId")
    );
    setGroupList(response);
  };

  const groupHandler = (group) => {
    setSelectedGroup(group);
  };

  const createGroupHandler = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.addButtonContainer} onClick={createGroupHandler}>
        <div>+</div>
      </div>
      <div className={styles.insideContainer}>
        <div
          style={{
            fontSize: "38px",
            fontWeight: "500",
            position: "fixed",
            backgroundColor: "white",
            width: "23.7%",
            textAlign: "center",
            top: "25px",
            height: "60px",
          }}
        >
          Pocket Notes
        </div>
        <div className={styles.groupContainer}>
          {groupList.map((group) => (
            <div
              key={group._id}
              className={styles.groupHover}
              onClick={() => groupHandler(group)}
            >
              <div className={styles.groupListContainer}>
                <div
                  style={{
                    backgroundColor: group.color,
                    height: "65px",
                    width: "65px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  <div style={{ fontSize: "22px", fontWeight: "600" }}>
                    {setProfileLetter(group.name)}
                  </div>
                </div>
                <div style={{ fontSize: "22px" }}>{group.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupList;

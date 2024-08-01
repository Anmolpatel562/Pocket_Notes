import React, { useEffect, useState } from "react";
import style from "../component_css/CreateGroupModal.module.css";
import { createGroup } from "../apis/Group";
import { toast } from "react-toastify";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

const CreateGroupModal = ({ showModal, setShowModal, groupList }) => {

  const [groupName,setGroupName] = useState([]); 
 
  useEffect(()=>{
    const names = groupList.map((group) => group.name);
    setGroupName(names);
  },[showModal]);


  const [newGroup, setNewGroup] = useState({
    device: localStorage.getItem("deviceId"),
    name: "",
    color: "",
  });

  const chooseColorHandler = (col) => {
    setNewGroup({
      ...newGroup,
      color: col,
    });
  };

  const createGroupHandler = async () => {
    try {
      let device = newGroup.device.trim();
      let name = newGroup.name.trim();
      let color = newGroup.color.trim();
       console.log(groupName)
      if(groupName.includes(name)){
        toast.error("Group with this name already exists.");
        return ;
      }

      const response = await createGroup({ device, name, color });


      toast.success(response, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.modalContainer}>
      <div>Create New group</div>
      <div style={{ display: "flex", gap: "1.8rem", flexDirection: "column" }}>
        <div className={style.groupNameContainer}>
          <div>Group Name</div>
          <input
            className={style.inputField}
            placeholder="Enter group name..."
            value={newGroup.name}
            onChange={(e) =>
              setNewGroup({
                ...newGroup,
                name: e.target.value,
              })
            }
          ></input>
        </div>
        <div className={style.colorContainer}>
          <div>Choose colour</div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  height: "45px",
                  width: "45px",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
                onClick={() => chooseColorHandler(color)}
              ></div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              backgroundColor: "#001F8B",
              padding: ".4rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={createGroupHandler}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;

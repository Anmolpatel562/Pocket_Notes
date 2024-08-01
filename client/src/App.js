import "./App.css";
import GroupList from "./components/GroupList";
import NotesComponent from "./components/NotesComponent";
import { existingUserCount, createUser } from "./apis/existingUsers.js";
import { useEffect, useState } from "react";
import TextNotesComponent from "./components/TextNotesComponent.jsx";
import CreateGroupModal from "./components/CreateGroupModal.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    const device = localStorage.getItem("deviceId");
    console.log(device);
    if (!device) {
      fetchExistingUser();
    }
  }, []);

  const fetchExistingUser = async () => {
    const count = await existingUserCount();
    if(!count){
      count = 123;
    }
    console.log(count);
    const response = await createUser(`device0`);
    localStorage.setItem("deviceId", `device0`);
  };

  const handleOutSideModal = (event) => {
    if (event.target.className === "modalContainer") {
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      {showModal ? (
        <div
          style={{
            backgroundColor: "#2F2F2FBF",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <div className="modalContainer" onClick={handleOutSideModal}>
            <CreateGroupModal
              showModal={showModal}
              setShowModal={setShowModal}
              groupList={groupList} 
            ></CreateGroupModal>
          </div>
        </div>
      ) : (
        <></>
      )}
      <GroupList
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        showModal={showModal}
        setShowModal={setShowModal}
        groupList={groupList} 
        setGroupList={setGroupList}
      ></GroupList>
      {selectedGroup === null ? (
        <NotesComponent />
      ) : (
        <TextNotesComponent selectedGroup={selectedGroup} />
      )}
    </div>
  );
}

export default App;

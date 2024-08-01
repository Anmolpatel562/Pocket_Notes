import "./App.css";
import GroupList from "./components/GroupList";
import NotesComponent from "./components/NotesComponent";
import { existingUserCount, createUser } from "./apis/existingUsers.js";
import { useEffect, useState } from "react";
import TextNotesComponent from "./components/TextNotesComponent.jsx";

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  

  useEffect(() => {
    const device = localStorage.getItem("deviceId");
    if (!device) {
      fetchExistingUser();
    }
  }, []);

  const fetchExistingUser = async () => {
    const count = await existingUserCount();
    console.log(count);
    const response = await createUser(`device${count}`);
    localStorage.setItem("deviceId", `device${count}`);
  };

  return (
    <div className="App">
      <GroupList
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
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

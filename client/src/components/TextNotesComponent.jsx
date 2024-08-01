import React, { useState, useEffect } from "react";
import styles from "../component_css/TextNotesComponent.module.css";
import { convertDateFormate } from "../utility/ConvertDateFormate.js";
import { setProfileLetter } from "../utility/ProfileLetter";
import { getTime } from "../utility/getTime.js";
import { createNotes } from "../apis/Group.js";
import sendOff from "../assets/sendOff.png";
import sendOn from "../assets/sendOn.png";
import dotImg from "../assets/dot.png";

const TextNotesComponent = ({ selectedGroup }) => {
  const [inputText, setInputText] = useState("");
  const [content, setContent] = useState(selectedGroup.content);

  useEffect(() => {
    setContent(selectedGroup.content);
  }, [selectedGroup]);

  const sendButtonHandler = async () => {
    const groupId = selectedGroup._id;
    const text = inputText.trim();
    if(text.length === 0){
      setInputText("");
      return;
    }
    try {
      const newContent = await createNotes({ groupId, text });
      console.log(newContent);
      setContent(newContent);
      setInputText("");
    } catch (error) {
      console.log("Error in sendButtonHandler", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div
          style={{
            backgroundColor: selectedGroup.color,
            height: "60px",
            width: "60px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "18px",
          }}
        >
          <div>{setProfileLetter(selectedGroup.name)}</div>
        </div>
        <div style={{ color: "white", fontSize: "24px" }}>
          {selectedGroup.name}
        </div>
      </div>
      <div className={styles.mainContainer}>
        {content.map((note) => (
          <div key={note.createdAt} className={styles.textSection}>
            <div>{note.text}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "1rem",
                marginTop: "15px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <div>{convertDateFormate(note.createdAt)}</div>
              <img src={dotImg} alt="" />
              <div>{getTime(note.createdAt)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerContainer}>
        <textarea
          className={styles.noteInputField}
          type="text"
          placeholder="Enter your text here............"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className={styles.sendButtonContainer}>
          {inputText.length > 0 ? (
            <img src={sendOn} alt="sendIcon" onClick={sendButtonHandler} />
          ) : (
            <img src={sendOff} alt="sendIcon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextNotesComponent;

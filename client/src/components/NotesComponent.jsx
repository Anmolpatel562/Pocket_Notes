import React from "react";
import styles from "../component_css/NotesComponent.module.css";
import notesBgImg from "../assets/notesBgImg.png";
import lock from "../assets/lock.png";

const NotesComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.upperContainer}>
          <img src={notesBgImg}></img>
          <div>Pocket Notes</div>
          <div>
            Send and receive messages without keeping your phone online.
          </div>
          <div>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:".6rem"}}>
          <img src={lock} alt="lockLogo" />
          <div>end-to-end encrypted</div>
        </div>
      </div>
    </div>
  );
};

export default NotesComponent;

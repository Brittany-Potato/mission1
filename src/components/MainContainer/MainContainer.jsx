import { React, useState } from "react";
import styles from "./MainContainer.module.css";

export default function MainContainer() {
  //Variables
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
      if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
      }
    };

    return (
      <div className={styles.maindivcontainer}>
        <h1 className={styles.title}>Get an insurance quote here</h1>
        <div className={styles.imagediv}>
          <input type="file" accept="image/*" id='fileUpload' onChange={handleFileChange} className={styles.hiddenbutton}/>
          <label htmlFor="fileUpload" className={styles.custombutton}>Upload Vehicle Image</label>
          {fileName && <p>Selected file: {fileName}</p>}
        </div>
      </div>
    );
  };


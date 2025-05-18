import { React, useState } from "react";
import styles from "./MainContainer.module.css";

export default function MainContainer() {
  //Variables
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  

  //The function that allows a user to upload a file/image
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  //backend
  const uploadToBackend = async () => {
    if (!fileName) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); //the backends expected key is now "file"

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });



      if (response.ok) {
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json(); // expects valid JSON
      alert("Uploaded successfully!");
      console.log(data);
    } else {
      alert("Upload succeeded but server did not return JSON");
    }

  } else {
    const errorData = await response.json();
    alert("Upload failed: " + (errorData?.error || "Unknown error"));
    console.error("Upload failed with status", response.status, errorData);
  }
} catch (error) {
  console.error("Error uploading file:", error);
  alert("Upload failed: " + error.message);
}}

  return (
    <div className={styles.maindivcontainer}>
      <h1 className={styles.title}>Get an insurance quote here</h1>
      <div className={styles.imagediv}>
        {/* Had to create a div to contain the button inorder to style it properly */}
        <input
          type="file"
          accept="image/*"
          id="fileUpload"
          onChange={handleFileChange}
          className={styles.hiddenbutton}
        />
        <label htmlFor="fileUpload" className={styles.custombutton}>
          Upload Vehicle Image
        </label>
        {fileName && <p>Selected file: {fileName}</p>}
      </div>
      <div>
        <button onClick={uploadToBackend} className={styles.uploadbutton}>Submit Image</button>
      </div>
    </div>
  );
}


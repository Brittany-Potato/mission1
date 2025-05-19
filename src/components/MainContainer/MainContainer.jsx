import { React, useState } from "react";
import styles from "./MainContainer.module.css";

export default function MainContainer() {
  //Variables
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [predictionResult, setPredictionResult] = useState();

  //The function that allows a user to upload a file/image
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  //backend function
  const uploadToBackend = async () => {
    if (!fileName) {
      alert("Please select a file first.");
      return;
    } //Makes sure a file has been selected  before proceeding with the prepared image file "file"

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
          setPredictionResult(data.prediction);
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
    }
  };

  return (
    <div className={styles.maindivcontainer}>
      <a href="www.turners.co.nz" className={styles.navigationtab}>
        Home <span className={styles.navsymbol}>>></span> Quote
      </a>
      <h1 className={styles.title}>Get an insurance quote here</h1>
      <div className={styles.imagediv}>
        {/* Had to create a div to contain the button inorder to style it properly */}
        <p className={styles.insuranceinfo}>
          Upload an image of your vehicle so we can calculate your insurance
          premium
        </p>
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
        {fileName && (
          <p className={styles.selectedfile}>Selected file: {fileName}</p>
        )}

        {previewUrl && (
          <div className={styles.previewcontainer}>
            <img
              src={previewUrl}
              alt="uploaded preview"
              className={styles.previewimage}
            />
          </div>
        )}
      </div>
      <div>
        <button onClick={uploadToBackend} className={styles.uploadbutton}>
          Submit Image
        </button>
      </div>
      {predictionResult && (
        <div className={styles.predictioncontainer}>
          <h3 className={styles.predictiontitle}>Prediction results:</h3>
          <ul className={styles.predictionlist}>
            {predictionResult.predictions.map((p, index) => (
              <li key={index} className={styles.predictionresult}>
                <strong>{p.tagName}</strong>: {(p.probability * 100).toFixed(1)}
                %
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

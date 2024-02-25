import './FileUpload.css'
import React, { useState } from 'react';
import { resolvePath, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
function FileUpload() {
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [res, setres] = useState('');
  const [loader, setLoader] = useState(false);
  const history = useNavigate();
  var content = '';
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      var data = reader.result.toString();
      content = data.split(",")[1];
      console.log("Selectedfile", content);
    }


    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      // Here you can handle the file upload, for example, by submitting it via AJAX
      console.log('File selected:', selectedFile);
      // Simulating file submission, replace this with actual code to submit the file
      setTimeout(() => {
        saveFile(selectedFile);
      }, 1000);
    } else {
      alert('Please select a PDF file.');
    }
  };
  const saveFile = async (selectedFile) => {
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);
    try {
      // Save the file locally
      saveLocally(selectedFile);
      // Send the file to the backend
      setLoader(true);
      const response = await axios.post('http://localhost:8000/receive_base64', {
        base64Data: content
      });
      const response1 = await axios.get('http://localhost:8000/summary');
      setres(response1.data);
      console.log('File uploaded successfully:', response1.data);
      setSuccessMessage('File submitted successfully!');
      setLoader(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('Error uploading file. Please try again.');
      setLoader(false);
    }
  };
  const saveLocally = (selectedFile) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      // Save file content to localStorage
      localStorage.setItem('pdfFile', fileContent);
    };
    reader.readAsDataURL(selectedFile);
  };

  const OnChangeSuccess = () => {
    console.log("@@@@@@@@@@@@", res);
    history('/Report-Page', { state: res });
  }
  const [isChecked, setIsChecked] = useState(false);
        const handleCheckboxChange = (event) => {
          setIsChecked(event.target.checked);
          console.log(event.target.checked);
        };
  return (
    <div className="file-upload">
      <button disabled={!isChecked || loader}  onClick={() => document.getElementById('fileInput').click()}>
        Upload PDF
      </button>

      {loader && <div class="spinner-border" role="status" style={{ "marginLeft": "20px" }}>
        <span class="visually-hidden">Loading...</span>
      </div>}
      <input
        type="file"
        id="fileInput"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div class = " text-dark mt-3 ">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{"marginRight":"5px"}}
          />
          <b>Allow MedEZ to use my Report Data to Learn and Improve.</b>
        </label>
      </div>
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
          <button onClick={OnChangeSuccess()}>Click to view full</button>
        </div>
      )}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
}
export default FileUpload;
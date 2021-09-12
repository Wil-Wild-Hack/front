import React, { useRef, useState } from "react";

const FileUploader = ({ onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const [spinner, setSpinner] = useState(false);

  const handleFileInput = (e) => {
    // handle validations

    const file = e.target.files[0];
    onFileSelectSuccess(file);
    setSpinner(true);
  };

  return (
    <div>
      <div className="upload-button">
        <input type="file" id="actual-btn" onChange={handleFileInput} hidden />

        <label
          for="actual-btn"
          // onClick={(e) => fileInput.current && fileInput.current.click()}
        >
          Завантажити фото
        </label>
      </div>
      <div
        className="loading"
        style={{ visibility: spinner ? "visible" : "hidden" }}
      >
        <img src="loading.gif" alt="" />
      </div>
    </div>
  );
};

export default FileUploader;

// export default ({ onFileSelect }) => {
//   const fileInput = useRef(null);

//   const handleFileInput = (e) => {
//     // handle validations
//     onFileSelect(e.target.files[0]);
//   };

//   return (
//     <div className="file-uploader">
//       <input type="file" onChange={handleFileInput} />
//       <button
//         onClick={(e) => fileInput.current && fileInput.current.click()}
//         className="btn btn-primary"
//       >
//         Завантажити фото
//       </button>
//     </div>
//   );
// };

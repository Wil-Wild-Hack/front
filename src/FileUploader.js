import React, { useRef } from "react";

const FileUploader = ({ onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelectSuccess(file);
  };

  return (
    <div>
      <input type="file" id="actual-btn" onChange={handleFileInput} hidden />

      <label
        className="upload-button"
        for="actual-btn"
        // onClick={(e) => fileInput.current && fileInput.current.click()}
      >
        Завантажити фото
      </label>

      {/* <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      /> */}
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

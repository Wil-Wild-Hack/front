import axios from "axios";
import React, { useState } from "react";

export default () => {
  // const [imageMagic, setImage] = useState("");

  const fileSelect = document.getElementById("fileSelect");
  const fileElem = document.getElementById("fileElem");

  fileSelect.addEventListener(
    "click",
    function (e) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault();
    },
    false
  );

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const imageMagic = document.getElementById("input").files[0];

  //   await axios
  //     .post(``, {
  //       imageMagic,
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });

  //   setImage("");
  // };

  return (
    <div>
      <div className="">
        <input
          type="file"
          id="fileElem"
          multiple
          accept="image/*"
          style="display:none"
          onchange="handleFiles(this.files)"
        />
        <a href="#" id="fileSelect">
          Select some files
        </a>
      </div>
    </div>
  );
};

// export default () => {
//   const downloadImage = async (event) => {
//     event.preventDefault();

//     await axios
//       .post("YOUR API URI", {
//         // include your additional POSTed data here
//         responseType: "blob",
//       })
//       .then((response) => {
//         // let blob = new Blob([response.data], {
//         //     type: extractContentType(response),
//         //   }),
//         //   downloadUrl = window.URL.createObjectURL(blob),
//         //   filename = "",
//         //   disposition = response.headers["content-disposition"];
//         // if (disposition && disposition.indexOf("attachment") !== -1) {
//         //   let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
//         //     matches = filenameRegex.exec(disposition);
//         //   if (matches != null && matches[1]) {
//         //     filename = matches[1].replace(/['"]/g, "");
//         //   }
//         // }
//         // let a = document.createElement("a");
//         // if (typeof a.download === "undefined") {
//         //   window.location.href = downloadUrl;
//         // } else {
//         //   a.href = downloadUrl;
//         //   a.download = filename;
//         //   document.body.appendChild(a);
//         //   a.click();
//         // }
//       })
//       .catch((error) => {
//         // ...
//       });
//   };

//   return (
//     <div>
//       <button className="btn btn-image" onClick={downloadImage}>
//         Download image
//       </button>
//     </div>
//   );
// };

// const download = (e) => {
//   console.log(e.target.href);
//   fetch(e.target.href, {
//     method: "GET",
//     headers: {},
//   })
//     .then((response) => {
//       response.arrayBuffer().then(function (buffer) {
//         const url = window.URL.createObjectURL(new Blob([buffer]));
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", "image.png"); //or any other extension
//         document.body.appendChild(link);
//         link.click();
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// return (
//   <div className="App">
//     <a
//       href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
//       download
//       onClick={(e) => download(e)}
//     >
//       <i className="fa fa-download" />
//       download
//     </a>
//   </div>
// );

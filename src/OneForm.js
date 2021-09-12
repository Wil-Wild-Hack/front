import React, { useState } from "react";
import FileUploader from "./FileUploader";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import { Link, useHistory } from "react-router-dom";
// import FileDownload from "js-file-download";

const OneForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const history = useHistory();

  const submitForm = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // console.log("formData", formData, "file:", file);

    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    await axios({
      method: "POST",
      url: `http://34.83.193.123:8000/process_new`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    })
      // .then((res) => {
      //   console.log(res.data);
      // })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        history.push({
          pathname: "/result",
          state: {
            data: url,
          },
        });
      })
      // history.push({
      //   pathname: "/result",
      //   state: {
      //     data: url,
      //   },
      // });
      // console.log(res.data);
      //})
      .catch((err) => {
        alert("File Upload Error");
      });
  };

  return (
    <div>
      <div className="header">
        <FileUploader
          onFileSelectSuccess={(file) => {
            setSelectedFile(file);
            // console.log("FileUploader", file);
            submitForm(file);
          }}
        />
      </div>
      <div className="progress-bar">
        {/* style="position: relative; width: 100%; height: 100%;" */}
        {/* <ProgressBar /> */}
      </div>
    </div>
  );
};

//   return (
//     <div className="header">
//       <form>
//         <FileUploader onFileSelectSuccess={(file) => {setSelectedFile(file)} />

//         <button onClick={submitForm}>Підібрати хобі</button>
//       </form>
//     </div>
//   );
// };

//   return (
//     <div className="App">
//       <form onSubmit={submitForm}>
//         {/* <input
//           type="file"
//           value={selectedFile}
//           onChange={(e) => setSelectedFile(e.target.files[0])}
//         /> */}

//         <FileUploader
//           onFileSelectSuccess={(file) => setSelectedFile(file)}
//           onFileSelectError={({ error }) => alert(error)}
//         />
//         {/* <button className="buttonOne" onClick={submitForm}>
//           Показати хобі
//         </button> */}
//       </form>
//     </div>
//   );
// };

// class OneForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Write magic action...",
//       photo: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <form>
//         <input
//           name="text"
//           type="text"
//           value={this.state.text}
//           onChange={this.handleInputChange}
//         />
//         <br />
//         <input
//           name="photo"
//           type="file"
//           value={this.state.photo}
//           onChange={this.handleInputChange}
//         />
//       </form>
//     );
//   }
// }

//     this.handleChangeText = this.handleChange.bind(this);
//     this.handleChangeImage = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Отправленное имя: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="file"
//           value={this.stateImage.value}
//           onChange={this.handleChangeImage}
//         />
//         <input
//           type="text"
//           value={this.stateText.value}
//           onChange={this.handleChangeText}
//         />
//         <input type="submit" value="Magic!" />
//       </form>
//     );
//   }
// }

export default OneForm;

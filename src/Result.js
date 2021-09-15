import "./App.css";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import { withRouter, useHistory } from "react-router-dom";

const Result = (props) => {
  const history = useHistory();
  const link = history.location.state?.data;
  console.log(link);

  return (
    <div>
      <div class="nav-container">
        <div class="wrapper">
          <nav>
            <a href="/">
              <div className="logo">Inseption</div>
            </a>
          </nav>
        </div>
      </div>
      <div class="header-container">
        <div class="wrapper">
          <header>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player fixed-bottom"
                url={link}
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </header>
          <div>
            <ul>
              <li>Box</li>
              <li>Dance</li>
              <li>Jack</li>
              <li>Taekwondo</li>
              <li>Squats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Result extends Component {
//   //   constructor(props) {
//   //     super(props);
//   //     const { link } = props.location.state;
//   //   }

//   render() {
//     return (
//       <div>
//         <div class="nav-container">
//           <div class="wrapper">
//             <nav>
//               <a href="/">
//                 <div class="logo">Inseption</div>
//               </a>
//             </nav>
//           </div>
//         </div>
//         <div class="header-container">
//           <div class="wrapper">
//             <header>
//               <div className="player-wrapper">
//                 <ReactPlayer
//                   className="react-player fixed-bottom"
//                   url={link}
//                   playing={true}
//                   width="100%"
//                   height="100%"
//                   controls={true}
//                 />
//               </div>
//             </header>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(Result);

// const Result = () => {
//   return (

//   );
// };

export default Result;

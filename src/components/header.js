import React from 'react';
// import { withRouter } from 'react-router-dom';

const header = (props) => {
  return (
    <div className="homeHeader contentBlock">
      <div className="headerLogoBox" />
      <div className="signButtonsContainer">
        <div className="logIn signButton">
          Log In
        </div>
        <div className="signUp signButton">
          Sign Up
        </div>
      </div>
    </div>
  );
};

// class header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: 0,
//     };
//   }
//   render() {
//     return (
//       <div className="homeHeader contentBlock">
//         <div className="headerLogoBox" onClick={this.props.homeRouter} />
//         <div className="signButtonsContainer">
//           <div className="logIn signButton">
//           Log In
//         </div>
//           <div className="signUp signButton">
//           Sign Up
//         </div>
//         </div>
//       </div>
//     );
//   }
// }

export default header;

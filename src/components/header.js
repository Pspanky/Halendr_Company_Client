import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

const header = (props) => {
  return (
    <div className="homeHeader contentBlock">
      <div className="headerLogoBox" />
      <div className="signButtonsContainer">
        <button className="logIn signButton">
          Log In
        </button>
        <button className="signUp signButton">
          Sign Up
        </button>
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
//     this.homeRouter = this.homeRouter.bind(this);
//   }
//
//   homeRouter() {
//     this.props.history.push('/');
//   }
//
//   render() {
//     return (
//       <div className="homeHeader contentBlock">
//         <div className="headerLogoBox" onClick={this.homeRouter} />
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

// export default withRouter(connect()(header));
export default header;

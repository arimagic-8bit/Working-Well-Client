// import React from "react";
// import activityService from "./activityService";
// const { Consumer, Provider } = React.createContext();


// const actCons = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <Consumer>
//           {({
//             activities,
//             activity,
//             allTitle,
//             allCompletion,
//             allRest,
//             getTitle,
//             createActivity,
//           }) => {
//             return (
//               <WrappedComponent
//                 activities={activities}
//                 activity={activity}
//                 allTitle={allTitle}
//                 allCompletion={allCompletion}
//                 allRest={allRest}
//                 getTitle={getTitle}
//                 createActivity={createActivity}
//                 {...this.props}
//               />
//             );
//           }}
//         </Consumer>
//       );
//     }
//   };
// };

// // --> Provider <-- //

// class ActivityProvider extends React.Component {
//   state = {
//     activities: [],
//     activity: null,
//     title: '',
//     completion: "00:00",
//     rest: "00:00",
//   };

//   // GET INFO FROM PAGES

//   getTitle = (oneTitle) => {
//     this.setState({title:oneTitle})
//     this.createActivity();
//   };

//   // API CALLS

//   // getOne = (id) => {

//   // }

//   createActivity = () => {
//     const {title, completion, rest} = this.state;
//     console.log(title, completion, rest)
//     activityService
//       .createActivity(title, completion, rest)
//       .then((response) => {
//         console.log(response)
//         //this.getAll();
//       })
//       .catch((err) => console.log(err));
//   };

//   getAll = () => {
//       activityService
//       .showAll()
//       .then((response) => {
//           this.setState({activities: response})
//       })
//       .catch((err) => console.log(err))
//   }

//   render() {
//     const {activities,  activity, allTitle, allCompletion, allRest } = this.state;
//     const { getTitle, createActivity } = this;

//     return (
//       <Provider value={{
//           activities,
//           activity,
//           allTitle,
//           allCompletion,
//           allRest,
//           getTitle,
//           createActivity,
//         }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// export { actCons, ActivityProvider };

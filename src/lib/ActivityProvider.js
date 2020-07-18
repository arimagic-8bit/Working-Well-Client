import React from "react";
import activityService from "./activityService";
const { Consumer, Provider } = React.createContext();


const actCons = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({
            activities,
            activity,
            allTitle,
            allCompletion,
            allRest,
            getTitle,
            createActivity,
          }) => {
            return (
              <WrappedComponent
                activities={activities}
                activity={activity}
                allTitle={allTitle}
                allCompletion={allCompletion}
                allRest={allRest}
                getTitle={getTitle}
                createActivity={createActivity}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// --> Provider <-- //

class ActivityProvider extends React.Component {
  state = {
    activities: [],
    activity: null,
    allTitle: [],
    allCompletion: [],
    allRest: [],
  };

  // GET INFO FROM PAGES

  getTitle = (title) => {
    const arrTitle = this.state.allTitle.concat(title);
    this.setState({ allTitle: arrTitle });
    console.log(this.state.title);
  };

  // API CALLS

  createActivity = () => {
    // const { title, completion, rest } = this.state;

    // activityService
    //   .createActivity(title, completion, rest)
    //   .then((response) => {
    //     this.setState({ activity: response });
    //   })
    //   .catch((err) => console.log(err));
  };

  getAll = () => {
      activityService
      .showAll()
      .then((response) => {
          this.setState({activities: response})
      })
      .catch((err) => console.log(err))
  }

  render() {
    const {activities,  activity, allTitle, allCompletion, allRest } = this.state;
    const { getTitle, createActivity } = this;

    return (
      <Provider value={{
          activities,
          activity,
          allTitle,
          allCompletion,
          allRest,
          getTitle,
          createActivity,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { actCons, ActivityProvider };

import React from "react";
import activityService from "./activityService";
const { Consumer, Provider } = React.createContext();



// --> HOC to create Consumer <-- //

function actCons(WrappedComponent){
  return function(props) {
      return (
        <Consumer>
          {(valueFromProvider) => (
              <WrappedComponent
                {...props}
                activities={valueFromProvider.activities}
                activity={valueFromProvider.activity}
                title={valueFromProvider.title}
                completion={valueFromProvider.completion}
                rest={valueFromProvider.rest}
                getTitle={valueFromProvider.getTitle}
                createActivity={valueFromProvider.createActivity}
              />
            )
          }
        </Consumer>
      );
  };
};

// --> Provider <-- //

class ActivityProvider extends React.Component {
  state = {
    activities: [],
    activity: null,
    title: [],
    completion: [],
    rest: [],
  };

  // GET INFO FROM PAGES

  getTitle = (title) => {
    const arrTitle = this.state.title.concat(title);
    this.setState({ title: arrTitle });
    console.log(this.state.title);
  };

  // API CALLS

  createActivity = () => {
    const { title, completion, rest } = this.state;

    activityService
      .createActivity(title, completion, rest)
      .then((response) => {
        this.setState({ activity: response });
      })
      .catch((err) => console.log(err));
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
    const {activities,  activity, title, completion, rest } = this.state;
    const { getTitle, createActivity } = this;

    return (
      <Provider value={{
          activities,
          activity,
          title,
          completion,
          rest,
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

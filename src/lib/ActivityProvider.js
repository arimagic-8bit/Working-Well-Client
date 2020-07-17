import React from "react";
import activityService from './activityService';
const { Consumer, Provider } = React.createContext();

// --> HOC to create Consumer <-- //


// --> Provider <-- //

class ActivityProvider extends React.Component {

    state = {
        activities: [],
        activity: null,
        title:'',
        completion:'',
        rest:'',
    };

    // GET INFO FROM PAGES

    getTitle = (title) => {

    }

    // API CALLS

    createActivity = () => {
        const {title, completion, rest} = this.state;

        activityService
        .createActivity(title, completion, rest)
        .then((response) =>{
            this.setState({activity:response})
        })
        .catch((err) => console.log(err))
    }

    render() {

        const {activities, activity, title, completion, rest} = this.state;

        return (
            <Provider
            value={{
                    activities,
                    activity,
                    title,
                    completion,
                    rest
                }}
            >
              {this.props.children}  
            </Provider>
        )
    }
}

export { actProv, ActivityProvider };

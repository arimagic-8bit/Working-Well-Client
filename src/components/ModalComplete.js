import React, { Component } from 'react';

import activityService from '../lib/activityService';
import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';


class ModalComplete extends Component {

    state = {
        allActivities: [],
    }

    componentDidMount = () => {
        activityService.showAll()
        .then((activities) => {
            this.setState({allActivities:activities});
        })
        .catch((err) => console.log(err));
    };

    render() {
        const {rest, largeBreak} = this.props;
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        const {allActivities} = this.state;


        return (
            <div className={showOrHide}>
                <div className='modal-main'>
                    <p>Congrats!</p>
                    <p>You are ready to go</p>
                    <div>
                    { allActivities[0] && allActivities.map((activity, index) => {
                            return (
                                <div key={index}>
                                    <p>{activity.title}</p>
                                    <p>{activity.completion}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <p>Time between activities: {rest}</p>
                    <p>Final break: {largeBreak}</p>
                    <Link>Go!</Link>
                </div>
            </div>
        )
    }
}


export default actConsum(ModalComplete)
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';


class ModalComplete extends Component {

    render() {
        const {rest, largeBreak, allActivities} = this.props;
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';


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
                    <Link to={"/timerWork"} onClick={() => this.props.setAllActivities(allActivities)}>Go!</Link>
                </div>
            </div>
        )
    }
}


export default actConsum(ModalComplete)
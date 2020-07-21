import React, { Component } from 'react';
import {actConsum} from '../lib/ActivityProvider';
import TimeToWork from './TimeToWork';

import takeARest from '../images/pale-129.png'


class TimerRest extends Component {
    
    state = {
        show: true,
    }

    componentDidMount = () => {
        this.props.setRestTimer();
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    handleClose = () => {
        this.setState({show:false});
    };

    render() {

        const {minutes, seconds} = this.props;
        const {show} = this.state;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div className='blue-container'>
                    <p className='timer-title'>IT'S TIME TO REST</p>
                    <div className='img-cont'>
                      <img className='img-s' src={takeARest} alt='Girl taking coffee'/> 
                    </div>
                    {
                        minutes === 0 && seconds === 0
                        ?
                        <TimeToWork handleClose={this.handleClose} show={show}  />
                        :
                        <div>
                            <p className='time'>Time remaining:</p>
                            <p className='time'>{minutes<10 ? `0${minutes}` : minutes} : {seconds<10 ? `0${seconds}` : seconds}</p>
                        </div>
                    }      
                </div> 
            </div>
        )
    }
}

export default actConsum(TimerRest)
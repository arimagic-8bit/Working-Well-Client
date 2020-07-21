import React, { Component } from 'react';
import {actConsum} from '../lib/ActivityProvider';
import FinalModal from './FinalModal';
import jump from '../images/clip-end-of-quarantine-happy-and-joyful-girl-1.png'


class FinalTimer extends Component {
    
    state = {
        show: true,
    }

    componentDidMount = () => {
        this.props.setLargeTimer();
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    handleClose = () => {
        this.setState({show:false});
    };

    render() {

        const {minutes, seconds, index, length} = this.props;
        const {show} = this.state;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div className='blue-container'>
                    <p className='timer-title'>TIME FOR A LARGE BREAK</p>
                    <div className='number-container'>
                        <p className='number-final'>{index}/{length}</p>
                    </div>
                    <div className='img-cont'>
                      <img className='img-s' src={jump} alt='Girl taking coffee'/> 
                    </div>
                    {
                        minutes === 0 && seconds === 0
                        ?
                        <FinalModal handleClose={this.handleClose} show={show}  />
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

export default actConsum(FinalTimer)
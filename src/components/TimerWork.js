import React, { Component } from 'react';
import {actConsum} from '../lib/ActivityProvider';
import GreatWork from './GreatWork';


class TimerWork extends Component {
    
    state = {
        show: true,
    }

    componentDidMount = () => {
        this.props.setWorkTimer()
    };

    componentWillUnmount() {
        clearInterval(this.myInterval)
    };

    handleClose = () => {
        this.setState({show:false});
    };

    render() {

        const {minutes, seconds} = this.props;
        const {show} = this.state;

        return (
            <div>
          
            {
                minutes === 0 && seconds === 0
                ?
                <GreatWork handleClose={this.handleClose} show={show}  />
                :
                <p>Time remaining: {minutes<10 ? `0${minutes}` : minutes} : {seconds<10 ? `0${seconds}` : seconds}</p>

            }
                 
            </div>
        )
    }
}

export default actConsum(TimerWork)
import React, { Component } from 'react';

import ModalComplete from '../components/ModalComplete';
import {actConsum} from '../lib/ActivityProvider';

class LargeBreakScreen extends Component {

    state = {
        largeBreak: '',
        show:false,
        errorMessage: false,
    };

    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

    handleShow = () => {
        const {largeBreak} = this.state;
        this.props.setBreak(largeBreak);
        this.props.setAllActivities();
        this.setState({show:true, errorMessage:false});
    };

    handleClose = () => {
        this.setState({show:false, title: ''});
    };

    preventClick = (e) => {
        e.preventDefault();
        this.setState({errorMessage: true});
    }


    render() {

        const {largeBreak, show,errorMessage} = this.state;
        const isLinkClickable = largeBreak === '' ? this.preventClick : this.handleShow; 

        return (
            <div>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>Add a rest time to take between each task or activity</p>
                    <p><span className='bold'>Hint:</span> For 25 min of working is better to rest 5 min</p>
                    <label>Rest time:</label>
                    <input
                        placeholder='0 minutes'
                        name='largeBreak'
                        value={largeBreak}
                        onChange={this.handleChange}
                    />
                    <button onClick={isLinkClickable} >➜</button>
                    <ModalComplete 
                    show={show} />
                    {
                        errorMessage && <p>You need to write your large break time to continue</p>
                    }
                </div>
            </div>
        )
    }
}


export default actConsum(LargeBreakScreen)
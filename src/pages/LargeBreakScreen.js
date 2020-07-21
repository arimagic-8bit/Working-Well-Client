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
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div className='large-container'>
                    <div className='blue-container'>
                        <p className='normal-text spaced'>Finally, add a <span>large break</span> after you complete all the list</p>
                        <p className='normal-text center'><span className='bold'>Hint:</span> How about a 20 min rest?</p>
                    <div className='form'>
                            <label className='label'>Break time:</label>
                            <input
                                className='input'
                                placeholder='0 minutes'
                                name='largeBreak'
                                value={largeBreak}
                                onChange={this.handleChange}
                            />
                    </div>
                        <ModalComplete 
                        show={show} />
                        {
                            errorMessage && <p className='error-noti'>You need to write your large break time to continue</p>
                        }
                    </div>
                    <div className='link-container'>
                        <button className='forward' onClick={isLinkClickable} >➜</button>
                    </div>
                   
                </div>
            </div>
        )
    }
}


export default actConsum(LargeBreakScreen)
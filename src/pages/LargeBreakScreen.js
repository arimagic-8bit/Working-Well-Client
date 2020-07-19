import React, { Component } from 'react';

import ModalComplete from '../components/ModalComplete';
import {actConsum} from '../lib/ActivityProvider';

class LargeBreakScreen extends Component {

    state = {
        largeBreak: '',
        show:false,
    };

    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

    handleShow = () => {
        const {largeBreak} = this.state;
        this.props.setBreak(largeBreak);
        this.setState({show:true});
    };

    handleClose = () => {
        this.setState({show:false, title: ''});
    };


    render() {

        const {largeBreak, show} = this.state;

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
                        placeholder='00:00'
                        name='largeBreak'
                        value={largeBreak}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleShow} >➜</button>
                    <ModalComplete 
                    show={show} />
                </div>
            </div>
        )
    }
}


export default actConsum(LargeBreakScreen)
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';

class RestScreen extends Component {

    state={
        rest: '',
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };


    render() {

        const {rest} = this.state;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>Add a rest time to take between each task or activity</p>
                    <p><span className='bold'>Hint:</span> For 25 min of working is better to rest 5 min</p>
                    <label>Rest time:</label>
                    <input
                        placeholder='0 minutes'
                        name='rest'
                        value={rest}
                        onChange={this.handleChange}
                    />
                    <Link onClick={() => this.props.setRest(rest)} to={'/break'}>➜</Link>
                </div>
            </div>
        )
    }
}

export default actConsum(RestScreen)

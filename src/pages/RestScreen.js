import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';

class RestScreen extends Component {

    state={
        rest: '',
        errorMessage: false,
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    };

    preventClick = (e) => {
        e.preventDefault();
        this.setState({errorMessage: true});
    }


    render() {

        const {rest, errorMessage} = this.state;
        const isLinkClickable = rest === '' ? this.preventClick : () => this.props.setRest(rest);

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div className='blue-container'>
                    <p className='normal-text spaced'>Add a rest time to take between each task or activity</p>
                    <p className='normal-text center'><span className='bold'>Hint:</span> For 25 min of working is better to rest 5 min</p>
                   <div className='form'>
                        <label className='label'>Rest time:</label>
                        <input
                            className='input'
                            placeholder='0 minutes'
                            name='rest'
                            value={rest}
                            onChange={this.handleChange}
                        />
                   </div>
                    {
                        errorMessage && <p className='error-noti'>You need to write some time to rest to continue</p>
                    }
                </div>
                <div className='link-container'>
                    <Link className='forward' onClick={isLinkClickable} to={'/break'}>➜</Link>
                </div>
            </div>
        )
    }
}

export default actConsum(RestScreen)

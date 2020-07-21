import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Modal from './../components/Modal';
import activityService from '../lib/activityService';

class ActivityScreen extends Component {

    state = {
        title: '',
        show: false,
        allActivities: [],
        errorMessage: false,
    }
    
    componentDidMount = () => {
        activityService.deleteAll()
        .then((removed) => {
            console.log(removed)
        })
        .catch((err) => console.log(err))
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleShow = (e) => {
        e.preventDefault()
        this.setState({show:true, errorMessage:false});
    }

    handleClose = () => {
        activityService.showAll()
        .then((activities) => {
            console.log(activities)
            this.setState({allActivities:activities, show:false, title: ''});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    preventClick = (e) => {
        e.preventDefault();
        this.setState({errorMessage: true});
    }

    render() {

        const {title, show, allActivities, errorMessage} = this.state;
        const isLinkClickable = (allActivities.length > 0) ? null : this.preventClick;
        const isButtonClickable = (title === '') ? this.preventClick : this.handleShow;
        
        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div className='blue-container'>
                    <p className='normal-text spaced'>First, let's start defining your <span className='bold'>task or activity</span></p>
                    <p className='normal-text'>You can add as many things as you need</p>

                    {
                       allActivities[0] && allActivities.map((activity, index) => {
                            return(
                                <div className='activity-container' key={index}>
                                    <p>{activity.title}</p>
                                    <p>{activity.completion} {activity.completion == 1 ? 'minute' : 'minutes'}</p>
                                </div>
                            )
                        })
                    }

                    <form className='activity-form' onSubmit={this.handleSubmit}>
                        <input 
                            className='input with-space'
                            type='text' 
                            placeholder='What do you want to do?'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                            />
                        <button className='more-btn' onClick={isButtonClickable} type='submit'>+</button>
                    </form>
                    <Modal
                        show={show}
                        title={title}
                        handleClose={this.handleClose}
                    />
                </div>
                <Link onClick={isLinkClickable} to={'/rest'}>➜</Link>
                {
                    errorMessage && <p>You need to write some activity to continue</p>
                }
            </div>
        )
    }
}

export default ActivityScreen

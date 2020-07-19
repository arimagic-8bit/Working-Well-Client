import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Modal from './../components/Modal';
import activityService from '../lib/activityService';

class ActivityScreen extends Component {

    state = {
        title: '',
        show: false,
        allActivities: [],
    }


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleShow = (e) => {
        e.preventDefault()
        this.setState({show:true});
    }

    handleClose = () => {
        this.setState({show:false, title: ''});
        activityService.showAll()
        .then((activities) => {
            this.setState({allActivities:activities});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {

        const {title, show, allActivities, totalWorkingTime} = this.state;
        
        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>First, let's start defining your <span className='bold'>task or activity</span></p>
                    <p>You can add as many things as you need</p>

                    {
                        allActivities.map((activity, index) => {
                            return(
                                <div key={index}>
                                    <p>{activity.title}</p>
                                    <p>{activity.completion}</p>
                                    
                                </div>
                            )
                        })
                    }

                    <form onSubmit={this.handleSubmit}>
                        <input type='text' 
                            placeholder='What do you want to do?'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                            />
                        <button onClick={this.handleShow} type='submit'>+</button>
                    </form>
                    <Modal
                        show={show}
                        title={title}
                        handleClose={this.handleClose}
                    />
                </div>
                <Link to={'/rest'}>➜</Link>
            </div>
        )
    }
}

export default ActivityScreen

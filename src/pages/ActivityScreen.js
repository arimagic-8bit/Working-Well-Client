import React, { Component } from 'react';

import {withAuth} from '../lib/AuthProvider';


class ActivityScreen extends Component {

    state = {
        activity: '',
        allActivities:[],
    }

    render() {

        const {activity} = this.state;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>First, let's start defining your <span className='bold'>task or activity</span></p>
                    <p>You can add as many things as you need</p>
                    <form>
                        <input type='text' 
                            placeholder='What do you want to do?'
                            name='activity'
                            value={activity}
                            />
                        <button type='submit'>+</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default withAuth(ActivityScreen)

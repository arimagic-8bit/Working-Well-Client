import React, { Component } from 'react';

import {actCons} from '../lib/ActivityProvider';


class ActivityScreen extends Component {

    state = {
        title: '',
        allTitles: []
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const {title} = this.state;
        const newArr = this.state.allTitles.concat(title);

        //this.props.getTitle(title);
        this.setState({allTitles:newArr});
    }

    render() {

        const {title} = this.state;
        
        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>First, let's start defining your <span className='bold'>task or activity</span></p>
                    <p>You can add as many things as you need</p>

                    

                    <form onSubmit={this.handleSubmit}>
                        <input type='text' 
                            placeholder='What do you want to do?'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                            />
                        <button type='submit'>+</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default actCons(ActivityScreen)

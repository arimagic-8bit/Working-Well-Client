import React, { Component } from 'react';
import activityService from '../lib/activityService';


class Modal extends Component {
    
    state = {
        completion: '00:00',
    }
    
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {title} = this.props;
        const {completion} = this.state;
        activityService.createActivity(title, completion)
        .then((activity) => {
            console.log(activity)
        })
        .catch((err) => console.log(err))
        this.props.handleClose();
    }

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        const {completion} = this.state;

        return (
            <div className={showOrHide}>
                <form className='modal-main' onSubmit={this.handleSubmit}>
                    <p className='text'>Now, <span className='bold'>add</span> a time you want to dedicate on it</p>
                    <input
                    className='input-modal'
                    type='text'
                    name='completion'
                    value={completion}
                    onChange={this.handleChange}
                    />
                    <button className='btn-done' type='submit'>Done</button>
                </form>
            </div>
        )
    }
}

export default Modal
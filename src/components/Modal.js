import React, { Component } from 'react';
import activityService from '../lib/activityService';


class Modal extends Component {
    
    state = {
        completion: '',
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
        this.setState({completion:''})
    }

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        const {completion} = this.state;

        return (
            <div className={showOrHide}>
                <div className='modal-main' >
                    <form className='form' onSubmit={this.handleSubmit}>
                        <p className='text'>Now, <span className='bold'>add</span> how many minutes you want to dedicate on it</p>
                        <input
                        className='input'
                        placeholder='0 minutes'
                        type='text'
                        name='completion'
                        value={completion}
                        onChange={this.handleChange}
                        />
                        <button className='normal-btn' type='submit'>Done</button>
                    </form> 
                </div>
            </div>
        )
    }
}

export default Modal
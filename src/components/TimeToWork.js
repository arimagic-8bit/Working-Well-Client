import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class TimeToWork extends Component { 

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';

        return (
            
            <div className={showOrHide}>
                <div className='modal-main'>
                    <p>Time to work!</p>
                    <Link to={"/timerWork"} onClick={this.props.handleClose} className='btn-next'>Ok</Link>
                </div>
            </div>
        )
    }
}

export default TimeToWork
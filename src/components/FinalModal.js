import React, { Component } from 'react';
import {actConsum} from '../lib/ActivityProvider';


class FinalModal extends Component { 

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';

        return (
            
            <div className={showOrHide}>
                <div className='modal-main'>
                    <h2>YOU DID IT!</h2>
                    <p>You completed all of your tasks. What do you want to do now?</p>
                    <button>Restart</button>
                    <button>Log out</button>
                </div>
            </div>
        )
    }
}

export default actConsum(FinalModal)
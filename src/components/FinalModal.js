import React, { Component } from 'react';
import {withAuth} from '../lib/AuthProvider';
import {Link} from 'react-router-dom';


class FinalModal extends Component { 

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        const {logout} = this.props;

        return (
            
            <div className={showOrHide}>
                <div className='modal-main'>
                    <p className='timer-title'>YOU DID IT!</p>
                    <p className='normal-text center less-space'>You completed all of your tasks. What do you want to do now?</p>
                    <div className='btn-cont'>
                        <Link className='go' to="/activities">Restart</Link>
                        <Link className='logout' onClick={logout}>Log out</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(FinalModal)
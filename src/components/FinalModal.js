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
                    <h2>YOU DID IT!</h2>
                    <p>You completed all of your tasks. What do you want to do now?</p>
                    <Link to="/activities">Restart</Link>
                    <button onClick={logout} >Log out</button>
                </div>
            </div>
        )
    }
}

export default withAuth(FinalModal)
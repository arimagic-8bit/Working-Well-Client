import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';
import success from '../images/fogg-unsubscribed-1.png'


class GreatWork extends Component { 

    componentDidMount = () => {
        const {length, index} = this.props;
        console.log('VAMOS A VER',index, length)
    }

    render() {
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        const {index, length}= this.props;
        const linkTo = (index === length) ? "/timerFinal" : "/timerRest";

        return (
            
            <div className={showOrHide}>
                <div className='modal-main'>
                    <p className='timer-title'>Great work!</p>
                    <p className='normal-text center'>You completed one activity</p>
                    <div className='img-cont'>
                        <img className='image' src={success} alt='climb a mountain' />
                    </div>
                    <div className='btn-cont'>
                       <Link
                        to={linkTo}
                        onClick={this.props.handleClose} 
                        className='go'
                        >
                        Ok
                        </Link> 
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default actConsum(GreatWork)
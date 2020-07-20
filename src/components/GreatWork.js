import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actConsum} from '../lib/ActivityProvider';


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
                    <p>Great work!</p>
                    <Link
                        to={linkTo}
                        onClick={this.props.handleClose} 
                        className='btn-next'
                        >
                        Ok
                        </Link>
                </div>
            </div>
        )
    }
}

export default actConsum(GreatWork)
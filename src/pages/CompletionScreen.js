import React, { Component } from 'react';

import {actCons} from '../lib/ActivityProvider';
import {Link} from 'react-router-dom';

class CompletionScreen extends Component {
    render() {
        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
            </div>
        )
    }
}

export default actCons(CompletionScreen)

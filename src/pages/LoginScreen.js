import React, { Component } from 'react';
import {withAuth} from '../lib/AuthProvider';


class LoginScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default withAuth(LoginScreen);
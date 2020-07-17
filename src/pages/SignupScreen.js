import React, { Component } from 'react';
import {withAuth} from '../lib/AuthProvider';

class SignupScreen extends Component {

    state= {
        username: '',
        password: '',
        repeatPassword: '',
    };

    handleForm = event => {
        event.preventDefault();

        const {username, password,repeatPassword} = this.state;

        this.props.signup({username, password, repeatPassword});
    };

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {

        const {username, password, repeatPassword} = this.state;
        const {signupError,notTheSame} = this.props;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <p>Glad to meet you!</p>
                    <form onSubmit={this.handleForm}>
                        <input className='input' 
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                            value={username}
                            onChange={this.handleChange}
                             />

                        <input className='input'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={this.handleChange}
                             />

                        <label>Please, confirm your password</label>
                        <input className='input'
                            type='password'
                            name='repeatPassword'
                            placeholder='Password'
                            value={repeatPassword}
                            onChange={this.handleChange}
                             />
                        {signupError || notTheSame ? 
                        <div className='error-noti'>
                            <p>{signupError || notTheSame}</p>
                        </div>
                        : null}
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAuth(SignupScreen);
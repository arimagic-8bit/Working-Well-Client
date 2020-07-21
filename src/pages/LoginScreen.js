import React, { Component } from 'react';
import {withAuth} from '../lib/AuthProvider';
import {Link} from 'react-router-dom';


class LoginScreen extends Component {

    state = {
        username: '',
        password: '',
    };

    handleForm = event => {
        event.preventDefault();
        const {username, password} = this.state;
        this.props.login({username, password});
    };

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {

        const {username, password} = this.state;
        const {loginError} = this.props;

        return (
            <div className='page-container'>
                <div className='title-container'>
                    <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                </div>
                <div>
                    <Link className='arrow-return' to={"/"}>⇠</Link>
                    <p className='big-text'>Welcome back!</p>
                    <form className='form' onSubmit={this.handleForm}>
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
                        
                        {loginError ?
                            <div className='error-noti'>
                                <p>{loginError}</p>
                            </div>
                        : null
                        }

                        <button className='normal-btn' type='submit'>Sign in</button>  
                    </form>
                </div>
            </div>
        )
    }
}

export default withAuth(LoginScreen);
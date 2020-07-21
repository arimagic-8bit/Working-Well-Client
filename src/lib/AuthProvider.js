import React from "react";
import authService from "./authService";
const { Consumer, Provider } = React.createContext();

// --> HOC to create Consumer <-- //

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({
            isLoggedin,
            user,
            isLoading,
            loginError,
            signupError,
            notTheSame,
            login,
            logout,
            signup,
          }) => {
            return (
              <WrappedComponent
                isLoggedin={isLoggedin}
                user={user}
                isLoading={isLoading}
                loginError={loginError}
                signupError={signupError}
                notTheSame={notTheSame}
                login={login}
                logout={logout}
                signup={signup}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// --> Provider <-- //

class AuthProvider extends React.Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true, // the auth is still loading?
    loginError: null,
    signupError: null,
    notTheSame: null,
  };

  // when app and AuthProvider loads for first time
  // call to '/me' and check if user is authenticated
  componentDidMount() {
    authService
      .me()
      .then((response) => {
        
        this.setState({ isLoggedin: true, isLoading: false, user:response });
      })
      .catch(() =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  signup = (username, password, repeatPassword) => {
    if(password !== repeatPassword){
      
      this.setState({notTheSame:
      'Please, write the same password'})
    }
    else{
    authService
      .signup(username, password)
      .then((response) => {
        this.setState({ isLoggedin: true, isLoading: false, user:response });
      })
      .catch((err) => {
        this.setState({
          signupError:
            "Sorry, there was a problem. Please, check the provided info and try again"
        });
      });
    }
  };

  login = (username, password) => {
    authService
      .login(username, password)
      .then((response) => {
        this.setState({ isLoggedin: true, isLoading: false, user:response});
      })
      .catch((err) => {
        this.setState({ loginError: "Incorrect username or password" });
      });
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoggedin, user, isLoading, loginError, signupError, notTheSame } = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider
        value={{
          isLoggedin,
          user,
          isLoading,
          loginError,
          signupError,
          notTheSame,
          login,
          logout,
          signup,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { withAuth, AuthProvider };

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

// component:Component --> find the component property defined on props (component)
// and assign it to new location in state (Component)
// ...rest --> take all remaining properties on props and 
// collect them inside rest argument

function PrivateRoute({component: Component, isLoggedin, user, ...rest }){

    if(isLoading){
        return <h1>Loading...</h1>
    }
    else{
        return(
            <Route 
                {...rest}
                render={props =>
                    isLoggedin ? <Component {...props} /> : <Redirect to="/LoginScreen.js"/>
                }
            />
        );
    }
}

export default withAuth(PrivateRoute);
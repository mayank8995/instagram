import React from 'react';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  * as ROUTES from './constants/routes';
// import Signup from './pages/sign-up';
// import Signup from './pages/signup';
// import Login from './pages/Login';

const Login = React.lazy(() => import('./pages/login') )
const Signup = React.lazy(() => import('./pages/sign-up'))


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login}/>
          <Route path={ROUTES.SIGN_UP} component={Signup}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

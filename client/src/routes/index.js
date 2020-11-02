import React from "react";
import { Router } from 'react-router-dom';
import history from "./history";
import { PublicRoute } from '../routes/routesManager';
import { WorkerForm } from '../containers/Workers/WorkerForm';
import { WorkerDashboard } from '../containers/Workers/WorkerDashboard';
import { HelperForm } from '../containers/Seekers/HelperForm';
import { SeekerDashboard } from '../containers/Seekers/SeekerDashboard';
import { SignIn } from '../containers/authentication/SignIn';
import { SignUp } from '../containers/authentication/SignUp';
import { LandingPage } from '../containers/LandingPage';





export const showRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <PublicRoute
          exact
          path="/signin"
          component={props => <SignIn {...props} />}
        />
        <PublicRoute
          exact
          path="/signup"
          component={props => <SignUp {...props} />}
        /> <PublicRoute
          exact
          path="/seekerform"
          component={props => <HelperForm {...props} />}
        /> <PublicRoute
          exact
          path="/seekerdashboard"
          component={props => <SeekerDashboard {...props} />}
        /> <PublicRoute
          exact
          path="/workerform"
          component={props => <WorkerForm {...props} />}
        /> <PublicRoute
          exact
          path="/workerdashboard"
          component={props => <WorkerDashboard {...props} />}
        />
        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />
      </div>
    </Router>
  )

}
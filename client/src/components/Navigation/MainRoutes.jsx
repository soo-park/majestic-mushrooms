import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Body from '../Body.jsx';
import ComposeMessage from '../ComposeMessage.jsx';
import ViewMessage from '../ViewMessage.jsx';
import { withRouter } from 'react-router';

//Associate each route URL path with a component
const routes = [
  { path:          '/',
    exact:         true,
    component:     Body
  },
  { path:          '/authenticated',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    exact:         true,
    component:     Body
=======
  exact:         true,
  component:     Body
>>>>>>> mail read view pulls thread data from DB
=======
  exact:         true,
  component:     Body
>>>>>>> new routes implemented
=======
  exact:         true,
  component:     Body
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
  },
  { path:          '/compose',
    exact:         true,
    component:     ComposeMessage
  },
  { path:          '/message',
    exact:         true,
    component:     ViewMessage
  }
];

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const MainRoutes = (props) => (

  <Switch>
    {console.log('Rendering Routes', props)}
    {routes.map((route, index) => {
      return <PropsRoute
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />}
    )}
  </Switch>
);

export default withRouter(MainRoutes);
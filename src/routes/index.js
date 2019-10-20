/**
 * 
 */

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Home } from 'pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={()=><h1>About</h1>} />
    <Route exact path="/blog" component={()=><h1>Blog</h1>} />
    <Route exact path="/*" component={()=><h1>Not Found</h1>} />
  </Switch>
)
 
export default Routes;
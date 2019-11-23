import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NoMatch from './components/shared/NoMatch';
import Footer from './components/shared/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dash from './components/dash/Dash';
import Contact from './components/contact/Contact';
import Navbar from './components/shared/Navbar';
import Team from './components/team/Team';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/team" component={Team} />
        <ProtectedRoute exact path="/dash" component={Dash} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
    <Footer />
  </>
)

export default App;

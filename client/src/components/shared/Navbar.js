import React from 'react'
import { AuthConsumer } from "../../providers/AuthProvider";
import { Link, withRouter } from 'react-router-dom'
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import Logo from '../../img/logowhite.png';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            className='headerLink'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Link className="btn btn-default" to='/login'>
          Login
        </Link>
      )
    }
  }
  
  render() {
    return (
      <div style={{ background: 'black' }}>
        <Container className="header">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Link to='/'>
                  <Image className="logo" src={Logo} width="106" height="75" />
                </Link>
              </Grid.Column>
              <Grid.Column width={12}>
                <ul className="pull-right">
                  <li>
                    <Link to='/' className='headerLink'>
                      Features
                    </Link>
                  </li>
                  <li>
                    { this.rightNavItems() }
                  </li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
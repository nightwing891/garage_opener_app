import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import Logo from '../../img/logowhite.png';
import { Link } from 'react-router-dom';

const TopHeader = () => (
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
              <Link className="btn btn-default" to='/login'>
                Login
              </Link>
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default TopHeader;
import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import Logo from '../../img/logowhite.png';
import { Link } from 'react-router-dom';

const TopHeader = () => (
  <Container className="header">
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image className="logo" src={Logo} width="106" height="75" />
        </Grid.Column>
        <Grid.Column width={12}>
          <ul className="pull-right">
            <li>
              <a href="#" className='headerLink'>Features</a>
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
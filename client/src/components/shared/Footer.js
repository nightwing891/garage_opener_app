import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <ul>
              <h3>SafeGuarage</h3>
              <li>
                <Link to='/'>
                  Info
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  Login
                </Link>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column width={4}>
            <ul>
              <h3>About</h3>
              <li>
                <Link to='/team'>
                  Team
                </Link>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column width={4}>
            <ul>
              <h3>Support</h3>
              <li>
                <Link to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column width={4}>
            <ul>
              <h3>Community</h3>
              <li><a href="">Facebook</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Google+</a></li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Footer;
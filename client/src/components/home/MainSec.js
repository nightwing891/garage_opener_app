import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

const MainSec = () => (
  <Container className="main">
    <Grid>
      <Grid.Row>
        <Grid.Column width={9}>
          <h1>SafeGuarage</h1>
          <p>A SafeGuard for Your Garage.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default MainSec;
import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';

const MainSec = () => (
  <Container className="main">
    <Grid>
      <Grid.Row>
        <Grid.Column width={9}>
          <br />
          <br />
          <br />
          <br />
          <Header as='h1'>SafeGuarage</Header>
          <Header as='h3'>A SafeGuard for Your Garage.</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default MainSec;
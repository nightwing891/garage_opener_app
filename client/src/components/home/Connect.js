import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const Connect = () => (
  <div className="supporting-3">
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}> 
            <Image src="img/connect.svg" width="450" height="300" /> 
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h2">Connect with Others</Header>
            <p>Have multiple authenticated users for a single device. Let your friends and family know the status of your home, and be able to manipulate the security.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Connect;
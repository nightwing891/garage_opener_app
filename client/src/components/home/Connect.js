import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import ConnectImg from '../../img/connect.png';

const Connect = () => (
  <div className="supporting-3">
    <Container>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column width={8}> 
            <Image src={ConnectImg} height="300" /> 
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
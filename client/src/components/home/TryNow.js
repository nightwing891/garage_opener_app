import React from 'react';
import { Container, Icon, Header } from 'semantic-ui-react';

const TryNow = () => (
  <div class="supporting-4">
    <Container>
      <Header as='h2'>Try it now</Header> 
      <p>On any wifi device</p>
      <Icon name='tablet alternate' size='large' />
      <Icon name='mobile' size='large' />
      <Icon name='computer' size='large' />
    </Container>
  </div>
)

export default TryNow;
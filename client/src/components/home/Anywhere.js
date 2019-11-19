import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const Anywhere = () => (
  <div className="supporting-2">
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Access Anywhere</Header>
            <p>Take your security with you everywhere you go. Use on any wifi enable device - mobile, tablet, and your computer. </p>
          </Grid.Column>
          <Grid.Column> 
            <Image src="img/everywhere.svg" width="450" height="300" /> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Anywhere;
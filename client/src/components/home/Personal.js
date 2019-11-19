import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const Personal = () => (
  <div className="supporting-1">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column> 
              <Image src="img/you.svg" width="450" height="300" /> 
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">
                Your Personal Security
              </Header>
              <p>
                Using user authenticated techology to further give you access to your garage door. Using something only unqiue like your figure print for the hardware and a personal user authenticated profile on the software.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
)

export default Personal;
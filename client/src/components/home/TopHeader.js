import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const TopHeader = () => (
  <div className="header">
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image className="logo" src="img/logo.svg" width="106" height="75" />
        </Grid.Column>
        <Grid.Column width={12}>
          <ul class="pull-right">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a class="btn btn-default" href="#">Download</a>
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default TopHeader;
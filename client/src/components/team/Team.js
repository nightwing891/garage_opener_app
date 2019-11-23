import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
import Henry from '../../img/henry.jpg';
import User from '../../img/user.png'
import Rohan from '../../img/rohan.jpg'

const Team = () => (
  <Container>
    <Grid stackable columns={3}>
      <center className='center'>
        <br />
        <br />
        <br />
        <Header as='h1'>Team</Header>
      </center>
      <Grid.Row>
        <Grid.Column>
          <div className='team'>
            <Image src={Rohan} circular size='medium' centered />
            <Header as='h2'>Rohan Subedi</Header>
            <Header as='h4'>CEO</Header>
            <br />
            <br />
            <br />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='team'>
            <Image src={User} circular size='medium' centered />
            <Header as='h2'>Khoi Nguyen</Header>
            <Header as='h4'>CEO</Header>
            <br />
            <br />
            <br />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='team'>
            <Image src={Henry} circular size='medium' centered />
            <Header as='h2'>Henry Doan</Header>
            <Header as='h4'>CEO</Header>
            <br />
            <br />
            <br />
          </div>
        </Grid.Column>
      </Grid.Row>
      <br />
      <br />
      <br />
    </Grid>
  </Container>
)

export default Team;
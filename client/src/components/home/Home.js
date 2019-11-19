import React from 'react';
import TopHeader from './TopHeader';
import MainSec from './MainSec';
import Personal from './Personal';
import Anywhere from './Anywhere';
import Connect from './Connect';
import TryNow from './TryNow';
import { Container } from 'semantic-ui-react';

const Home = () => (
  <>
    <div className="jumbotron">
      <Container>
        <TopHeader />
        <MainSec />
      </Container>
    </div>
    <Personal />
    <Anywhere />
    <Connect />
    <TryNow />
  </>
)

export default Home;
import React from 'react';
import TopHeader from './TopHeader';
import MainSec from './MainSec';
import Personal from './Personal';
import Anywhere from './Anywhere';
import Connect from './Connect';
import TryNow from './TryNow';

const Home = () => (
  <>
    <div className="jumbotron">
      <TopHeader /> 
      <div className='mainSec'>
        <MainSec />
      </div>
    </div>
    <Personal />
    <Anywhere />
    <Connect />
    <TryNow />
  </>
)

export default Home;
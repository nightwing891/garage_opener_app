import React from 'react';
import MainSec from './MainSec';
import Personal from './Personal';
import Anywhere from './Anywhere';
import Connect from './Connect';
import TryNow from './TryNow';

const Home = () => (
  <>
    <div className="jumbotron">
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
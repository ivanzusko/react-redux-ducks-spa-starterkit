import React from 'react';
import SampleContainer from './containers/sampleContainer';
import SampleConciseContainer from './containers/sampleConciseContainer';

const Home = () => {
  return (
    <div>
      <h1>Here is a home page</h1>
      <h2>Open DevTools, click on buttons and watch your console</h2>
      <SampleContainer />
      <SampleConciseContainer />
    </div>
  );
};

export default Home;

import React from 'react';
// strongly recomend you to install `prop-types` package and use it:
// import PropTypes from 'prop-types'

// then you can define you propTypes to be sure that everything
// works as expected:
//
// const propTypes = {
//   testAction: PropTypes.func,
//   testAction2: PropTypes.func,
// };

const SampleComponent2 = (props) => {
  return (
    <div>
      <button onClick={props.testAction3}>Dispatch action #3</button>
      <button onClick={props.testAction4}>Dispatch action #4</button>
    </div>
  );
};

// SampleComponent.propTypes = propTypes;
export default SampleComponent2;

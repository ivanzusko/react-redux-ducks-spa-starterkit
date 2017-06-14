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

const SampleComponent = (props) => {
  return (
    <div>
      <button onClick={props.testAction1}>Dispatch action #1</button>
      <button onClick={props.testAction2}>Dispatch action #2</button>
    </div>
  );
};

// SampleComponent.propTypes = propTypes;
export default SampleComponent;

import { connect } from 'react-redux';
import SampleComponent2 from '../components/sampleComponent2';
import {
  testAction3,
  testAction4,
} from '../modules/sampleModule';

const mapStateToProps = (state) => {
  return {
    role: state.sampleReducer.role,
  };
};

export default connect(
  mapStateToProps,
  { testAction3, testAction4 },
)(SampleComponent2);

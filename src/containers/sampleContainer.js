import { connect } from 'react-redux';
import SampleComponent from '../components/sampleComponent';
import {
  testAction1,
  testAction2,
} from '../modules/sampleModule';

const mapStateToProps = (state) => {
  return {
    // NOTE!!!
    // Next line gives to our component access to entire state
    // but, in my humble opinion it creates a bit mess
    // inside component's props object, because in this case, 
    // it supposed that you will extract exactly what you need 
    // in you presentational component(PC), 
    // instead of pass via props exact parts of your state 
    // which should be rendered by PC. 
    // It's better to keep your PCs as dumb as possible:
    state, // remove if you do not need entire state in your component
    // Much better approach is to pass to your 
    // presentational component exact parts of your state.
    // Next line gives to our component access 
    // to exact part of our state through `props.user`.
    user: state.sampleReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // NOTE!!!
  // Next line gives our component direct an access to dispatch method
  // but, in my humble oppinion it creates a bit mess
  // inside component's props object. This adds additional
  // property in props object (`props.dispatch`), but it's better when
  // our presentational component doesn't no anything about Redux.
  dispatch, // remove if you don't need manualy dispatch something in PC
  // Here we're mapping actions to props which will be
  // available in our PC as `props.testAction` and
  // `props.testAction2`
  testAction1: () => {
    dispatch(testAction1());
  },
  testAction2: () => {
    dispatch(testAction2());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps, // remove this, if next is better for you
  // or you can pass all necessary actions directly 
  // instead of passing mapDispatchToProps. In this case
  // you don't need even to create mapDispatchToProps functions:
  // { testAction, testAction2 },
)(SampleComponent);

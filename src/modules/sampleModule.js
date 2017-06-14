const TEST_ACTION_TYPE_1 = 'TEST_ACTION_TYPE_1';
const TEST_ACTION_TYPE_2 = 'TEST_ACTION_TYPE_2';
const TEST_ACTION_TYPE_3 = 'TEST_ACTION_TYPE_3';
const TEST_ACTION_TYPE_4 = 'TEST_ACTION_TYPE_4';

export const testAction1 = () => ({
  type: TEST_ACTION_TYPE_1,
  payload: 'Snow',
});

export const testAction2 = () => ({
  type: TEST_ACTION_TYPE_2,
  payload: 'Stark',
});

export const testAction3 = () => ({
  type: TEST_ACTION_TYPE_3,
  payload: 'Bastard',
});

export const testAction4 = () => ({
  type: TEST_ACTION_TYPE_4,
  payload: 'King',
});

const initialState = {
  user: '',
  role: '',
};

/**
 * @name reducer
 * @param {Object} state - which by default is equal to initialState object
 * @param {Object} action - object with action type and sometimes could contain
 *                          additional keys (like payload etc.)
 * @returns {Object} state - default or updated by action
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION_TYPE_1:
    case TEST_ACTION_TYPE_2: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case TEST_ACTION_TYPE_3:
    case TEST_ACTION_TYPE_4: {
      return {
        ...state,
        role: action.payload,
      };
    }
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import { workersReducer } from './Workers/reducers/workersReducer';
import { seekersReducer } from './Workers/reducers/workersReducer';
import { authReducer } from './Workers/reducers/workersReducer';

export const rootReducer = combineReducers({

  workers: workersReducer,
  seekers: seekersReducer,
  auth: authReducer
})

export default { rootReducer }
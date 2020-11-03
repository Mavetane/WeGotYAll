import { combineReducers } from 'redux';
import { workersReducer } from './Workers/reducers/workersReducer';
import { seekersReducer } from './Seekers/reducers/seekersReducer';
import { authReducer } from './Authentication/reducers/authReducer';

export const rootReducer = combineReducers({

  workers: workersReducer,
  seekers: seekersReducer,
  auth: authReducer
})

export default { rootReducer }
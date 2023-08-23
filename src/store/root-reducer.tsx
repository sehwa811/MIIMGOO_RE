import { combineReducers } from 'redux';

import { KakaoEmailCheckReducer } from './KakaoEmailCheck';

export const rootReducer = combineReducers({
  kakao: KakaoEmailCheckReducer,
});
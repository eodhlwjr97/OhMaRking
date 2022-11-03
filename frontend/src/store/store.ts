// redux 컴포넌트
import { configureStore } from '@reduxjs/toolkit';
import nowColorReducer from './nowcolor';

// 만든 reducer 추가해주기
export const store = configureStore({
  reducer: {
    nowColor: nowColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
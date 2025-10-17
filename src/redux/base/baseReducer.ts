import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './baseApi';
import authReducer from '../feature/auth/authSlice';

const persistAuthConfig = {
      key: 'auth',
      storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const baseReducer = {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
};

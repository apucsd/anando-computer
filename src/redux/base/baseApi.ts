import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({
            baseUrl: `https://anando-computer-backend.vercel.app/api`,
            prepareHeaders: (headers, { getState }) => {
                  const { token } = (getState() as RootState).auth;
                  if (token) {
                        headers.set('Authorization', `Bearer ${token}`);
                  }
                  headers.set('ngrok-skip-browser-warning', 'true');
            },
      }),
      endpoints: () => ({}),
      tagTypes: ['Services', 'Galleries', 'Banners', 'FAQs', 'Settings'],
});

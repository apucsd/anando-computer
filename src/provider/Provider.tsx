import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Provider = ({ children }: { children: ReactNode }) => {
      return (
            <div>
                  <ConfigProvider
                        theme={{
                              token: {
                                    colorPrimary: '#FF6F3C',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: 16,
                              },
                              components: {
                                    Button: {
                                          controlHeight: 48,

                                          fontSize: 16,
                                          paddingInline: 24,
                                    },
                                    Typography: {
                                          colorText: '#333333',
                                    },
                                    Select: {
                                          controlHeight: 42,
                                          fontSize: 14,
                                    },
                                    Input: {
                                          controlHeight: 42,
                                          fontSize: 16,
                                          paddingInline: 24,
                                          inputFontSize: 14,
                                    },
                                    InputNumber: {
                                          controlHeight: 42,
                                    },

                                    Form: {
                                          marginLG: 10,
                                          labelColor: '#636363',
                                          labelFontSize: 16,
                                          labelRequiredMarkColor: '#FF6F3C',
                                    },
                                    DatePicker: {
                                          controlHeight: 42,
                                    },
                                    Table: {
                                          headerBg: '#FFEEE8',
                                    },
                                    Rate: {
                                          starColor: '#FF6F3C',
                                          starSize: 40,
                                    },
                              },
                        }}
                  >
                        <ReduxProvider store={store}>
                              <PersistGate persistor={persistor}>
                                    {children}
                              </PersistGate>
                        </ReduxProvider>
                  </ConfigProvider>
            </div>
      );
};

export default Provider;

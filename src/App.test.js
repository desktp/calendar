import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import createPersistedStore from './app/store';

const { store, persistor } = createPersistedStore();

test('renders calendar header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );

  expect(getByText(/sunday/i)).toBeInTheDocument();
});

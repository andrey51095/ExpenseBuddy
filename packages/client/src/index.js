import React from 'react';
import {createRoot} from 'react-dom/client';

import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {BrowserRouter} from 'react-router-dom';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {ToasterContainer, PLACEMENT} from 'baseui/toast';

import App from './App';
import 'reset-css';

import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  uri: `${process.env.REACT_APP_MACHINE_IP || 'http://172.16.11.62'}:${process.env.APP_SERVER_PORT || 8000}`,
});

const engine = new Styletron();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
          <ToasterContainer
            autoHideDuration={5000}
            placement={PLACEMENT.topRight}
          />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
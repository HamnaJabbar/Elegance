import '../styles/globals.css';
import { Provider } from 'react-redux';
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import store from '../slices/store';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    // <UserProvider>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </Provider>
    // </UserProvider>
  );
}

export default MyApp;

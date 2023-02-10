import Format from '../layouts/format';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Format>
      <Component {...pageProps} />
    </Format>
  );
}

export default MyApp;

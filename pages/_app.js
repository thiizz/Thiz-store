import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import NextNProgress from "nextjs-progressbar";
import LoginModalProvider from '../contexts/LoginModalContext';
import CartProvider from '../contexts/CartContext'
import OpenCartMenuProvider from '../contexts/OpenCartMenuContext'
import NotifyProvider from '../contexts/NotifyContext';
import { ToastContainer, Flip } from 'react-toastify';
import { AuthProvider } from '../contexts/AuthContext'
import Head from 'next/head';
import UserModalContextProvider from '../contexts/UserModalContext';
import ModalLogin from '../components/login/index';
import CartMenu from '../components/cart/CartMenu';
import CookiesConsentPopup from '../components/cookies-consent/CookiesConsentPopup';

function MaeTerra({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <OpenCartMenuProvider>
          <NotifyProvider>
            <LoginModalProvider>
              <CartProvider>
                <UserModalContextProvider>
                  <Header />
                </UserModalContextProvider>
                <NextNProgress
                  color="#0099ff"
                  startPosition={0.2}
                  stopDelayMs={200}
                  height={6}
                  showOnShallow={true}
                />
                <ToastContainer
                  position
                  pauseOnFocusLoss={false}
                  autoClose={3500}
                  hideProgressBar={false}
                  newestOnTop={false}
                  onClick
                  closeOnClick={true}
                  rtl={false}
                  draggable
                  pauseOnHover
                  progress={undefined}
                  transition={Flip}
                  theme="colored"
                  limit={3}
                  closeButton
                />
                <ModalLogin />
                <CartMenu />
                <Component {...pageProps} />
              </CartProvider>
            </LoginModalProvider>
          </NotifyProvider>
        </OpenCartMenuProvider>
        <CookiesConsentPopup />
      </AuthProvider>
      <Footer />
    </>
  )
}

export default MaeTerra
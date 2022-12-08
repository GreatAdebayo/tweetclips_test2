import { useEffect } from 'react'
import { Alert } from '../components/alert/alert'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArtboardState from '../context/artboard/state'
import setAuthToken from '../context/auth/setAuthToken'
import AuthState from '../context/auth/state'
import PlanState from '../context/plans/state'
import UiState from '../context/UI/state'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  if (typeof window !== "undefined" ? window.localStorage.ctoken : false) {
    setAuthToken(localStorage.ctoken)
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <UiState>
        <AuthState>
          <PlanState>
            <ArtboardState>
              <Alert />
              <Component {...pageProps} />
            </ArtboardState>
          </PlanState>
        </AuthState>
      </UiState>

    </>

  )

}

export default MyApp

import type { NextPage } from 'next';
import AudioReactContextProvider from '../contexts/AudioContext';
import AudioController from '../components/AudioController'

const Home: NextPage = () => {
  return (
    <>
    <AudioReactContextProvider>
      <AudioController/>
    </AudioReactContextProvider>
    </>
  )
}

export default Home

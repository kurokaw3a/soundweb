import { TrpcProvider } from './lib/trpc'
import { PlaylistsPage } from './pages/PlaylistsPage'

const App = () => {
  return (
    <TrpcProvider>
      <PlaylistsPage />
    </TrpcProvider>
  )
}

export default App

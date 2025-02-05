import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { PlaylistsPage } from './pages/Interface/PlaylistsPage'
import { ViewPaylistPage } from './pages/Interface/ViewPaylistPage'
import { getViewPlaylistRoute, viewPlaylistRouteParams } from './lib/routes'
import { Layout } from './components/layout'
import { SearchPage } from './pages/Interface/SearchPage'
import { ProfilePage } from './pages/Auth/ProfilePage'
import './styles/global.scss'

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
            <Route path={getViewPlaylistRoute(viewPlaylistRouteParams)} element={<ViewPaylistPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

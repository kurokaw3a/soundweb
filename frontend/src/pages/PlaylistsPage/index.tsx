import { trpc } from '../../lib/trpc'

export const PlaylistsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPlaylist.useQuery()

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  } else if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>All playlists</h1>
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', gap: 20 }}>
          {data?.playlists.map((playlist) => (
            <div key={playlist.id}>
              <img src={playlist.cover} alt={playlist.name} width={250} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h2>{playlist.name}</h2>
                <div>
                  <p>Tracks: {playlist.tracks}</p>
                  <p>Date of creation: {playlist.dateOfCreation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

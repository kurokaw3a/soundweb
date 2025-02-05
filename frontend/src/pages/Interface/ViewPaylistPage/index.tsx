import { useParams } from 'react-router-dom'
import { ViewPlaylistRouteParams } from '../../../lib/routes'
import { trpc } from '../../../lib/trpc'

export const ViewPaylistPage = () => {
  const { name } = useParams() as ViewPlaylistRouteParams

  const { data, error, isLoading, isError, isFetching } = trpc.getPlaylist.useQuery({ playlistName: name })
  if (isLoading || isFetching) {
    return <div>Loading...</div>
  } else if (isError) {
    return <div>Error: {error.message}</div>
  }
  if (!data.playlist) {
    return <span>Playlist not found!</span>
  } else
    return (
      <div>
        <div>
          <img src={data.playlist.cover} alt="" />
          <h1>{data.playlist.name}</h1>
        </div>
        {data.playlist.trackList.length > 0 ? (
          data.playlist.trackList.map((el) => (
            <div key={el.id}>
              <div>
                <ul>
                  <li style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
                    <div>
                      <img src="" alt="" />
                      <h3>{el.name}</h3>
                    </div>
                    <div>
                      <p>{el.duration}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>No tracks</div>
        )}
      </div>
    )
}

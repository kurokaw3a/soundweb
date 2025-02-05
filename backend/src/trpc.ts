import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const trackList = (count: number) => {
  return _.times(count, (i) => ({
    id: i,
    name: `Track name ${i}`,
    duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)}`,
  }))
}

const playlists = _.times(3, (i) => ({
  id: i,
  name: `Playlist name ${i}`,
  tracks: i * 10,
  cover: `https://picsum.photos/seed/${i}/200/200`,
  dateOfCreation: new Date().toISOString(),
  trackList: trackList(i * 10),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getPlaylists: trpc.procedure.query(() => {
    return { playlists: playlists.map((el) => _.pick(el, ['id', 'name', 'tracks', 'cover', 'dateOfCreation'])) }
  }),
  getPlaylist: trpc.procedure
    .input(
      z.object({
        playlistName: z.string(),
      })
    )
    .query(({ input }) => {
      const playlist = playlists.find((el) => el.name === input.playlistName)
      return { playlist: playlist || null }
    }),
})

export type TrpcRouter = typeof trpcRouter

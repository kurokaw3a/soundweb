import { initTRPC } from '@trpc/server'

const playlists = [
  {
    name: 'My playlist',
    id: 1,
    tracks: 5,
    dateOfCreation: '2021-09-01',
    cover: 'https://redcat.ca/cdn/shop/files/NDgtNDYyNy5qcGVn.jpg?v=1721691501',
  },
  {
    name: 'My playlist 2',
    id: 2,
    tracks: 3,
    dateOfCreation: '2021-09-02',
    cover: 'https://redcat.ca/cdn/shop/files/NDgtNDYyNy5qcGVn.jpg?v=1721691501',
  },
  {
    name: 'My playlist 3',
    id: 3,
    tracks: 7,
    dateOfCreation: '2021-09-03',
    cover: 'https://redcat.ca/cdn/shop/files/NDgtNDYyNy5qcGVn.jpg?v=1721691501',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getPlaylist: trpc.procedure.query(() => {
    return { playlists }
  }),
})

export type TrpcRouter = typeof trpcRouter

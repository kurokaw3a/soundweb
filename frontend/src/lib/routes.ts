const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {} as Record<keyof T, string>)
}

export const getPlaylistsRoute = () => '/'

export const viewPlaylistRouteParams = getRouteParams({ name: true })
export type ViewPlaylistRouteParams = typeof viewPlaylistRouteParams
export const getViewPlaylistRoute = ({ name }: ViewPlaylistRouteParams) => `/playlists/${name}`

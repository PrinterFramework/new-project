import { MetadataRoute } from 'next'
import { Description, Icon, IconType, Name, ShortName } from 'util/metadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: Name,
    short_name: ShortName,
    description: Description,
    start_url: '/',
    display: 'standalone',
    background_color: '#292929',
    theme_color: '#292929',
    icons: [
      {
        src: Icon,
        sizes: 'any',
        type: IconType
      }
    ]
  }
}

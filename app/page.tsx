import Counter from 'components/counter'
import Splash from 'components/splash'

export default function RootPage() {
  return (
    <div className="container page center">
      <Splash />
      <Counter />
    </div>
  )
}

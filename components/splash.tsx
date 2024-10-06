import Link from 'next/link'

export function Splash() {
  return (
    <div className="demo-splash">
      <div className="demo-splash-brand">
        <img src="/assets/img/logo.png" alt="Printer Logo" />
        <h1>Just Print It</h1>
      </div>
      <p>The Printer Base Template for Development</p>
      <Link href="/ui" className="button">
        Review UI Kit
      </Link>
    </div>
  )
}

export default Splash

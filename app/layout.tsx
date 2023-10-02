import 'scss/printer.scss'
import { ReactNode } from 'react'
import { ReduxProvider } from 'redux/provider'

export interface LayoutI {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutI) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  )
}

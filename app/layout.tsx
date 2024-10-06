import 'scss/printer.scss'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { GenerateMetadata } from 'util/metadata'
import { ReduxProvider } from '@redux/provider'

export const metadata: Metadata = GenerateMetadata({})

export interface LayoutI {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutI) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Suspense>{children}</Suspense>
        </ReduxProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pham Trung Kien — Frontend Developer',
  description: 'Portfolio of Pham Trung Kien, Frontend Developer based in Vietnam.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

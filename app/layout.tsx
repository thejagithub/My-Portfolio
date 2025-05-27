import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TR DevOps',
  icons: {
    icon: [
      { url: "/Favicon.png", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

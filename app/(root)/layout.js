export const metadata = {
  title: 'TODO-APP',
  description: 'A simple todo application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

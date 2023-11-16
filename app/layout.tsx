export const dynamic = "force-dynamic";

import './globals.css'

export const metadata = {
  title: 'ConsumerBFF',
  description: 'Save your transactions and calculate total of spended and earned money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}

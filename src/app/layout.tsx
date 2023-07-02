import { Sidebar } from '@/components'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex ml-[320px]">
          <Sidebar
            navigationItems={[
              { label: 'Search recipes', icon: '🧑🏻‍🍳', href: '/' },
              { label: 'Saved recipes', icon: '🍲', href: '/recipes/saved' },
              { label: 'Shopping list', icon: '🛒', href: '/shopping-list' },
            ]}
          />
          <main className="flex flex-col flex-1 h-full relative justify-between gap-12 px-12 py-6 mt-[88px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

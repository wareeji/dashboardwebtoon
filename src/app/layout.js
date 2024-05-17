import "./globals.css";
import Navbar from './components/DashboardAdmin/Navbar/Navbar.jsx'
import Sidebar from './components/DashboardAdmin/Sidebar/Sidebar.jsx'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KAKAO WEBTOON</title>
      </head>
      <body className='bg-[#121212] m-0 p-0 box-border'>
        <div className='flex text-white'>
          
          <aside className='flex-none w-72 bg-[#262525] p-[20px]'>
            <Sidebar />
          </aside>

          <div className='flex-1 p-[20px]'>
            <Navbar />
            {children}
          </div>

        </div>
      </body>
    </html>
  )
}
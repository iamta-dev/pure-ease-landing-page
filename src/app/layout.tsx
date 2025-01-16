import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai, Prompt } from 'next/font/google'
import '~/styles/globals.css';

const ibmPlexThai = IBM_Plex_Sans_Thai({ 
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex',
})

const prompt = Prompt({ 
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-prompt',
})

export const metadata: Metadata = {
  title: 'PureEase - ผลิตภัณฑ์เพื่อสุขภาพจากธรรมชาติ',
  description: 'เส้นทางสู่สุขภาพที่ดี เริ่มง่ายๆ กับเรา ด้วยผลิตภัณฑ์จากธรรมชาติที่คัดสรรมาเพื่อคุณ',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${ibmPlexThai.variable} ${prompt.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
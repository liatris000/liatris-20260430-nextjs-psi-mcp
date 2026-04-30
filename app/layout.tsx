import { Noto_Sans_JP } from 'next/font/google'
import Script from 'next/script'

// Before: Google Fonts via <link> in _document → render-blocking
// After: next/font self-hosting + lazyOnload for third-party scripts

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSans.className}>
      <body>
        {children}
        {/* lazyOnload: 全リソース読み込み後に実行 → TBT 改善 */}
        <Script
          src="https://example-chat.com/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Predictor — Stop Breaches Before They Happen',
  description: 'Monitor API usage patterns and predict when you will hit rate limits, with alerts and optimization suggestions for backend developers and DevOps teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cb8bd97f-f8fa-41f0-87c9-81061c4ce6a7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

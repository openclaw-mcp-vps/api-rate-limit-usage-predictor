export default function Home() {
  const faqs = [
    {
      q: 'How does the prediction work?',
      a: 'We analyze your historical API call patterns using time-series forecasting to project future usage and alert you before you breach any rate limit window.'
    },
    {
      q: 'Which APIs and providers are supported?',
      a: 'Any REST API with rate limits. Send usage data via our webhook endpoint or lightweight SDK. Works with Stripe, Twilio, OpenAI, GitHub, and more.'
    },
    {
      q: 'What happens after I subscribe?',
      a: 'You get instant access to your dashboard, webhook credentials, and setup docs. Alerts via email and Slack are included in the $12/mo plan.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict API rate limit breaches{' '}
          <span className="text-[#58a6ff]">before they happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor your API usage patterns, forecast when you'll hit rate limits, and get actionable alerts so your services never go down unexpectedly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $12/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📈', title: 'Usage Forecasting', desc: 'Time-series analysis predicts your API consumption hours ahead.' },
            { icon: '🔔', title: 'Proactive Alerts', desc: 'Get notified via email or Slack before you breach any limit.' },
            { icon: '⚡', title: 'Optimization Tips', desc: 'Receive concrete suggestions to reduce unnecessary API calls.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited API endpoints monitored',
              'Real-time usage forecasting',
              'Email & Slack alerts',
              'Webhook + SDK ingestion',
              'Usage optimization reports',
              '30-day data retention'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Rate Limit Predictor. All rights reserved.
      </footer>
    </main>
  )
}

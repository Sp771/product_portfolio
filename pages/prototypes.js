import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import WindowFrame from '../components/window-frame'
import PROTOTYPES from '../lib/prototypes'

function Tag({ children, ai }) {
  return (
    <span
      className={`inline-block text-sm font-bold rounded-full px-3 py-1 mr-2 mb-2 ${
        ai ? 'bg-cream text-ink' : 'bg-skytint text-ink'
      }`}
    >
      {children}
    </span>
  )
}

function PrototypeCard({ p, flip }) {
  return (
    <article id={p.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16 border-b border-slate-200 last:border-0">
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${p.title} prototype`}
        className={`group block lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
      >
        <WindowFrame
          src={p.image}
          alt={`${p.title} prototype screen`}
          className="transition-transform duration-200 group-hover:-translate-y-1"
        />
      </a>

      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <div className="mb-3">
          {p.tags.map((t) => (
            <Tag key={t} ai={t === 'AI feature'}>{t}</Tag>
          ))}
        </div>
        <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl leading-tight mb-2">{p.title}</h2>
        <p className="text-xl font-medium text-brand mb-5">{p.tagline}</p>
        <p className="text-lg text-slate-600 mb-5">
          <span className="font-bold text-ink">The problem: </span>
          {p.problem}
        </p>
        <ul className="text-lg text-slate-600 mb-7 space-y-2">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-2 w-2 rounded-full flex-none bg-flame" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-flame text-white font-bold text-lg px-8 py-3.5 hover:bg-ink transition-colors duration-150"
        >
          Try it live
        </a>
        {p.screens && (
          <div className="mt-5 text-slate-600">
            <span className="font-bold text-ink mr-2">More screens:</span>
            {p.screens.slice(1).map((s, i) => (
              <span key={s.href}>
                {i > 0 && <span className="mx-2 text-slate-300">|</span>}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4 hover:text-ink">
                  {s.label}
                </a>
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Prototypes() {
  return (
    <Layout>
      <Head>
        <title>Sydney Pittman | AI Prototypes</title>
      </Head>

      <section className="bg-ink text-white">
        <Container>
          <div className="pt-12 pb-16 lg:pt-16 lg:pb-20 max-w-3xl">
            <h1 className="text-cream font-display font-extrabold text-5xl md:text-7xl leading-[1.02] mb-6">AI prototypes</h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Instead of static mockups, I use Claude to turn requirements into working, clickable prototypes
              that clients, stakeholders and developers can use before any production code is written. It lets
              us test ideas, settle questions early, and hand development a clear picture of what to build.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <section>
          {PROTOTYPES.map((p, i) => (
            <PrototypeCard key={p.slug} p={p} flip={i % 2 === 1} />
          ))}
        </section>

        <p className="text-sm text-slate-500 text-center pb-16 pt-4">
          Concept prototypes built with Claude. All names, organizations and data shown are fictional.
        </p>
      </Container>
    </Layout>
  )
}

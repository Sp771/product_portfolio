import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import PROTOTYPES from '../lib/prototypes'

const BLUE = '#4056a1'
const ORANGE = '#D64E00'
const GREEN = '#94B143'

function Tag({ children, ai }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 mr-2 mb-2"
      style={ai ? { backgroundColor: ORANGE, color: '#ffffff' } : { backgroundColor: '#e8ebf6', color: BLUE }}
    >
      {children}
    </span>
  )
}

function PrototypeCard({ p, flip }) {
  return (
    <article id={p.slug} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-14 border-b border-slate-200 last:border-0">
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${p.title} prototype`}
        className={`group block ${flip ? 'md:order-2' : ''}`}
      >
        <div className="relative rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-200 border border-slate-200">
          <img src={p.image} alt={`${p.title} prototype screen`} width={1200} height={750} className="w-full h-auto block" loading="lazy" />
          <span
            className="absolute bottom-3 right-3 text-sm font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: ORANGE, color: '#ffffff' }}
          >
            Try it live ↗
          </span>
        </div>
      </a>

      <div className={flip ? 'md:order-1' : ''}>
        <div className="mb-3">
          {p.tags.map((t) => (
            <Tag key={t} ai={t === 'AI feature'}>{t}</Tag>
          ))}
        </div>
        <h2 className="text-4xl font-bold leading-tight mb-2" style={{ color: BLUE }}>{p.title}</h2>
        <p className="text-xl font-semibold text-slate-500 mb-4">{p.tagline}</p>
        <p className="text-lg text-slate-500 mb-4">
          <span className="font-semibold" style={{ color: ORANGE }}>The problem: </span>
          {p.problem}
        </p>
        <ul className="text-lg text-slate-500 mb-6 space-y-2">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full flex-none" style={{ backgroundColor: GREEN }} />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bold py-3 px-8 border duration-200 transition-colors hover:bg-white"
          style={{ backgroundColor: ORANGE, borderColor: ORANGE, color: '#ffffff' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = ORANGE }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = '#ffffff' }}
        >
          Try it live ↗
        </a>
        {p.screens && (
          <div className="mt-5 text-slate-500">
            <span className="font-semibold mr-2">More screens:</span>
            {p.screens.slice(1).map((s, i) => (
              <span key={s.href}>
                {i > 0 && <span className="mx-2 text-slate-300">|</span>}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline" style={{ color: BLUE }}>
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
      <Container>
        <Header />
        <section className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4" style={{ color: BLUE }}>
            AI Prototypes
          </h1>
          <p className="text-lg text-slate-500 mb-8 px-4 max-w-4xl mx-auto">
            Instead of static mockups, I use Claude to turn requirements into working, clickable prototypes
            that clients, stakeholders and developers can actually use before any production code is written.
            It lets us test ideas, settle questions early, and hand development a clear picture of what to build.
            Click into any of these to try them yourself.
          </p>
          <hr className="border-t-2 mb-2 mx-auto w-full" style={{ borderColor: GREEN }} />
        </section>

        <section>
          {PROTOTYPES.map((p, i) => (
            <PrototypeCard key={p.slug} p={p} flip={i % 2 === 1} />
          ))}
        </section>

        <p className="text-sm text-slate-400 text-center pb-16 pt-4">
          Concept prototypes built with Claude. All names, organizations and data shown are fictional.
        </p>
      </Container>
    </Layout>
  )
}

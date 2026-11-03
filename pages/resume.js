import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import R from '../lib/resume'

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5 text-slate-700 text-lg leading-relaxed">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 rounded-full flex-none bg-flame" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

function SideHeading({ children }) {
  return <h2 className="font-display font-extrabold text-ink text-2xl mb-4">{children}</h2>
}

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Sydney Pittman | Resume</title>
      </Head>

      <section className="bg-ink text-white">
        <Container>
          <div className="pt-12 pb-14 lg:pt-16 lg:pb-16 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.02] mb-3">Resume</h1>
              <p className="text-xl text-white/80 mb-4">{R.title} · {R.location}</p>
              <p className="text-white/80 flex flex-wrap gap-x-5 gap-y-1">
                <a href={`mailto:${R.email}`} className="underline underline-offset-4 hover:text-white">{R.email}</a>
                <a href={R.linkedin} className="underline underline-offset-4 hover:text-white">LinkedIn</a>
              </p>
            </div>
            <a
              href={R.pdf}
              download="Sydney_Pittman_Resume.pdf"
              className="rounded-full bg-lime text-ink font-bold text-lg px-8 py-4 hover:bg-white transition-colors duration-150"
            >
              Download PDF
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 order-1">
            <section className="mb-14">
              <h2 className="font-display font-extrabold text-ink text-3xl mb-4">Summary</h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-[68ch]">{R.summary}</p>
            </section>

            <section>
              <h2 className="font-display font-extrabold text-ink text-3xl mb-8">Experience</h2>
              <ol className="border-l-2 border-mist">
                {R.experience.map((job) => (
                  <li key={job.role + job.company} className="relative pl-8 pb-12 last:pb-0">
                    <span aria-hidden="true" className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-lime ring-4 ring-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
                      <h3 className="font-display font-extrabold text-ink text-2xl">{job.role}</h3>
                      <span className="text-slate-500 font-medium">{job.dates}</span>
                    </div>
                    <p className="text-brand font-bold text-lg mb-3">
                      {job.company} <span className="font-normal text-slate-500">· {job.place}</span>
                    </p>
                    {job.blurb && <p className="text-slate-600 italic mb-4">{job.blurb}</p>}
                    <Bullets items={job.bullets} />
                    {job.extra && (
                      <div className="mt-6 rounded-xl bg-mist p-5 md:p-6">
                        <h4 className="font-display font-extrabold text-ink text-xl mb-3">{job.extra.heading}</h4>
                        <Bullets items={job.extra.bullets} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="lg:col-span-4 order-2 space-y-12 lg:sticky lg:top-8 self-start">
            {Object.entries(R.skills).map(([group, list]) => (
              <section key={group}>
                <SideHeading>{group}</SideHeading>
                <ul className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <li key={s} className="rounded-full bg-mist text-ink font-medium px-3 py-1.5">{s}</li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <SideHeading>Certifications</SideHeading>
              <ul className="space-y-4">
                {R.certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-bold text-ink leading-snug">{c.name}</p>
                    <p className="text-slate-500">{c.org}, {c.year}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideHeading>Education</SideHeading>
              <p className="font-bold text-ink leading-snug">{R.education.degree}</p>
              <p className="text-slate-500">{R.education.school}, {R.education.place}</p>
            </section>

            <a
              href={R.pdf}
              download="Sydney_Pittman_Resume.pdf"
              className="inline-block rounded-full bg-flame text-white font-bold px-7 py-3 hover:bg-ink transition-colors duration-150"
            >
              Download PDF
            </a>
          </aside>
        </div>
      </Container>
    </Layout>
  )
}

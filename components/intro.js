import Head from 'next/head'
import Container from './container'
import WindowFrame from './window-frame'

export default function Intro() {
  return (
    <>
      <Head>
        <title>Sydney Pittman | AI-Native Product Leader</title>
      </Head>

      <section className="bg-ink text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 pb-20 lg:pt-16 lg:pb-28">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/assets/posts/authors/annie.svg"
                  alt="Sydney Pittman"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full"
                />
                <p className="text-lg text-white/80">Hi, I’m Sydney Pittman.</p>
              </div>

              <h1 className="text-cream font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-[1.02] mb-6">
                Product leader with an AI-first mindset.
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-9 max-w-xl">
                For 6 years I’ve turned complex requirements into products people actually use. Today I own
                MemberPlex, a member portal platform for not-for-profits, and lead a global development team
                from roadmap to release. I treat AI as part of how great products get built: GenAI features
                inside the product, AI-assisted backlog, QA and release work behind it, and clickable
                prototypes that let everyone see an idea before we build it.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/prototypes"
                  className="rounded-full bg-cream text-ink font-bold text-lg px-8 py-4 hover:bg-white transition-colors duration-150"
                >
                  Try my AI prototypes
                </a>
                <a
                  href="/assets/resume/Resume.pdf"
                  className="group rounded-full border-2 border-white/70 text-white font-bold text-lg px-8 py-[14px] hover:bg-white hover:text-ink transition-colors duration-150"
                >
                  <span className="group-hover:hidden">Download resume</span>
                  <span className="hidden group-hover:inline">Click me… you know you want to.</span>
                </a>
              </div>
            </div>

            <a href="/prototypes" aria-label="See all AI prototypes" className="lg:col-span-6 block">
              <div className="fan relative mx-auto max-w-xl lg:max-w-none h-[300px] sm:h-[380px] lg:h-[440px]">
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[115%] aspect-square rounded-full bg-sky" />
                <WindowFrame
                  src="/assets/prototypes/impersonation-mode.jpg"
                  alt=""
                  className="absolute w-[72%] left-0 top-6 -rotate-6 opacity-90"
                />
                <WindowFrame
                  src="/assets/prototypes/event-pathfinder.jpg"
                  alt=""
                  className="absolute w-[72%] right-0 top-0 rotate-[5deg] opacity-95"
                />
                <WindowFrame
                  src="/assets/prototypes/tender-messages.jpg"
                  alt="Tender Connect prototype with the Tender Coach AI assistant"
                  className="absolute w-[80%] left-[10%] top-[22%] -rotate-1"
                />
              </div>
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}

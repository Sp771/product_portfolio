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
                <p className="text-lg text-white/80">Hi, I’m Sydney, an AI-native product leader.</p>
              </div>

              <h1 className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-[1.02] mb-6">
                I turn product ideas into working AI prototypes.
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-9 max-w-xl">
                Product Owner of MemberPlex with 6 years in Agile product development. I build GenAI into
                both the product and the process, and give teams something they can click through before
                any production code is written.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/prototypes"
                  className="rounded-full bg-lime text-ink font-bold text-lg px-8 py-4 hover:bg-white transition-colors duration-150"
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

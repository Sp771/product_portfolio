import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import WindowFrame from '../components/window-frame'
import { getAllPosts } from '../lib/api'
import PROTOTYPES from '../lib/prototypes'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 3)
  return (
    <>
      <Layout>
        <Head>
          <title>Sydney Pittman | AI-Native Product Leader</title>
        </Head>
        <Intro />

        <section className="py-20" aria-labelledby="prototypes-heading">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <h2 id="prototypes-heading" className="font-display font-extrabold text-ink text-4xl md:text-6xl leading-tight mb-3">
                  AI prototypes you can click
                </h2>
                <p className="text-lg text-slate-600">
                  Working prototypes I built with Claude, from an AI networking coach to a conference
                  session planner. Each one opens in a new tab so you can try it yourself.
                </p>
              </div>
              <a href="/prototypes" className="rounded-full bg-flame text-white font-bold px-7 py-3 hover:bg-ink transition-colors duration-150">
                See how I built them
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
              {PROTOTYPES.map((p) => (
                <a key={p.slug} href={p.live} target="_blank" rel="noopener noreferrer" className="group block">
                  <WindowFrame
                    src={p.image}
                    alt={`${p.title} prototype`}
                    className="transition-transform duration-200 group-hover:-translate-y-1"
                  />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-ink group-hover:text-brand">{p.title}</h3>
                      <p className="text-slate-600">{p.tagline}</p>
                    </div>
                    <span className="flex-none rounded-full bg-lime text-ink text-sm font-bold px-4 py-2 group-hover:bg-ink group-hover:text-white transition-colors duration-150">
                      Try it live
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <div className="bg-mist py-16">
          <Container>
            <h2 className="font-display font-extrabold text-ink text-2xl mb-8">Featured project</h2>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
          </Container>
        </div>
        <Container>
          <div className="mt-16">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

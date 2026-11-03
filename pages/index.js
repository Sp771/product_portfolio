import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 3)
  return (
    <>
      <Layout>
        <Head>
          <title>Sydney Pittman's Product Portfolio</title>
        </Head>
        <Container>
          <Intro />
        </Container>
        <div className="pt-16 pb-16" style={{ backgroundColor: '#f2ecd8', color: '#D64E00' }}>
          <Container>
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
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16">
              <div className="md:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  <a href="/prototypes" className="text-[#4056a1] hover:text-[#94B143] transition duration-200">
                    AI Prototypes
                  </a>
                </h2>
                <p className="text-lg text-slate-500 mb-6">
                  Working, clickable prototypes I built with Claude, from an AI networking coach to a
                  conference session planner. Open any of them and try them yourself.
                </p>
                <a
                  href="/prototypes"
                  className="bg-[#D64E00] border border-[#D64E00] text-white font-bold py-3 px-8 inline-block duration-200 transition-colors hover:bg-white hover:text-[#D64E00]"
                >
                  See the prototypes
                </a>
              </div>
              <a href="/prototypes" aria-label="See the AI prototypes" className="block">
                <img
                  src="/assets/prototypes/tender-messages.jpg"
                  alt="Tender Connect prototype with the Tender Coach AI assistant"
                  width={1200}
                  height={750}
                  className="w-full h-auto rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  loading="lazy"
                />
              </a>
            </section>
          </Container>
          <Container>
            <div className="md:mt-16">
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

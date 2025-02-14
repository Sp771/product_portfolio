import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
            <Head>
  <title>Sydney Pittman | About</title>
</Head>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="pt-16 pb-16" style={{ backgroundColor: '#f2ecd8' }}>
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div>
                        <Image title={"lisafeets"} src={"/assets/about/annie.svg"} height={400} width={400} />
                      </div>
                      <div className="md:pr-8 md:col-span-2">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#4056a1' }}>
                          Hi! Im Sydney...
                        </h1>
                        <h2 className="text-xl font-semibold text-slate-500 mb-12">
    (World Traveler, Dog Mom, Avid Crafter, Product Leader)
  </h2>
                        <p className="text-lg block text-slate-500 mb-4">
  A Product Manager with a passion for innovation, travel, and nature. I love hiking, and I’m always on the move — my dog Pepper, who’s my favorite companion, loves to join me on hikes and hang out in my home office while I work remotely. I currently live in Wilmington, NC, but with my love for adventure, that may not be my home for long!
</p>
<p className="text-lg block text-slate-500 mb-4">
  My recent trip took me on a three-month road trip across the US, all the way into Canada, exploring national parks while working remotely the entire time. It was the perfect blend of work and travel.
</p>
<p className="text-lg block text-slate-500 mb-4">
  I started my career studying finance, but found my true calling in product management after a twist of fate — my boss left the company before I even started, so I ended up on a random team with a brilliant product owner who introduced me to the exciting world of tech. From there, I grew my career in product management, where I’ve been lucky to bring innovative solutions to life.
</p>
<p className="text-lg block text-slate-500 mb-4">
When I’m not shaping the future of products, you’ll find me planning my next adventure or spending quality time with Pepper. I believe in constantly learning and growing, and I’m excited for the next chapter in my career and life, wherever it may take me!
</p>
                      </div>
                    </div>
                  </Container>
              </div>
{/* New Section: Clickable Title and Image */}
<div className="pt-16 pb-16" style={{ backgroundColor: '#ffffff' }}>
  <Container>
    <div className="flex items-center justify-center md:justify-start">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold text-center md:text-right text-[#4056a1] mb-0 md:mr-8">
          <a href="/pepper" className="hover:text-[#d79922] transition duration-200">
            Pepper Pittman: Small Legs, Big Adventures
          </a>
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-slate-500 text-center md:text-right mt-2 md:ml-8">
        Click here if you're curious to see how her small but mighty legs power her through every adventure, no matter how big!
        </p>
      </div>
      {/* Image */}
      <div>
        <Image 
          src="/assets/pepper/pepper.svg" 
          alt="pepper pic" 
          width={300} 
          height={300} 
        />
      </div>
    </div>
  </Container>
</div>
            </Layout>
        </>
    );
}

export default About;
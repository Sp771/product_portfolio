import Image from 'next/image';
import Head from 'next/head';

export default function Intro() {
  return (
    <>
      <Head>
        <title>Sydney Pittman | Product Leader</title>
      </Head> {/* Corrected closing tag */}
      
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div className="md:pr-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight" style={{ color: '#4056a1' }}>
            Hi, I'm Sydney Pittman<br />
            <span className="text-4xl md:text-5xl font-semibold" style={{ color: '#94b143' }}>
              Product Leader
            </span>
          </h1>

          <p className="text-lg block text-slate-500 mt-4">
            Results-driven Product Manager with expertise in Agile, product design, and mentorship. 
            Focused on innovative, customer-centric solutions, team growth, and data-driven strategies 
            to boost engagement and performance. Thrives in fast-paced, trend-driven environments.
          </p>

          {/* Resume Button with hover text change */}
          <div className="group inline-block mt-6">
            <a
              href="/assets/resume/Resume.pdf"
              className="bg-[#D64E00] border border-[#D64E00] text-white font-bold py-3 px-12 lg:px-8 
                         duration-200 transition-colors inline-block hover:bg-white hover:text-[#D64E00]"
            >
              <span className="group-hover:hidden">Download Resume</span>
              <span className="hidden group-hover:inline">Click me… you know you want to.</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <Image 
          title="lisafeets" 
          src="/assets/posts/authors/annie.svg" 
          height={700} 
          width={700} 
          alt="Author Image"
          className="mt-6 md:mt-0"
        />
      </section>
    </>
  );
}

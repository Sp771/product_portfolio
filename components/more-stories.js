import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  const router = useRouter();
  const [isProjectsPage, setIsProjectsPage] = useState(false);

  useEffect(() => {
    setIsProjectsPage(router.pathname === "/projects");
  }, [router.pathname]);

  return (
    <section className={isProjectsPage ? "text-center" : ""}> {/* Centering content for projects page */}
      <h2
        className={`mb-4 font-bold leading-tight ${
          isProjectsPage ? "text-7xl" : "text-4xl md:text-5xl"
        }`}
      >
        {isProjectsPage ? (
          <span className="text-[#4056a1]">More Projects</span> // Not clickable
        ) : (
          <a
            href="/projects"
            className="p-4 block text-[#4056a1] hover:text-[#94B143] transition duration-200"
          >
            More Projects
          </a>
        )}
      </h2>
      <p className="text-lg text-slate-500 mb-8 px-4">
      These projects highlight key features and products I’ve helped bring to life, showcasing some of my most meaningful work. While they provide a glimpse into my portfolio, they represent only a fraction of my experience due to confidentiality agreements. Each project reflects my approach to product development—blending innovation, user-centric design, and strategic problem-solving to create impactful solutions.
      </p>
        {/* Adding a line under the paragraph */}
        {isProjectsPage && (
        <hr className="border-t-2 border-[#94B143] mb-8 mx-auto w-full" />
      )}

      <div className="mb-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
import Link from 'next/link';
import { getWritingSlugs, getWritingPost } from '../../../lib/writing';

export function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { meta } = getWritingPost(slug);
  return {
    title: meta.title,
    description: "Praveen Suhag's Portfolio",
  };
}

export default async function WritingPost({ params }) {
  const { slug } = await params;
  const { meta, html } = getWritingPost(slug);

  return (
    <div className="about_page about_serif">
      <main className="about_container">
        <article className="writing_detail">
          <header className="writing_header">
            <Link href="/" className="writing_back">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M7.5 3 4.5 6l3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="writing_title">{meta.title}</h1>
          </header>

          <div className="writing_prose" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </div>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getFrontMatter } from '@lib/mdx'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const posts = await getFrontMatter('./content/articles')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bi-directional links in a Next.js blog</title>
        <meta name="description" content="This is a demonstration of bi-directional linking between MDX-based blog posts in a Next.js blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
          Next.js meets bi-directional links!
        </h1>

        <p className={styles.description}>
          This is a demonstration of bi-directional linking between MDX-based blog posts in a Next.js blog.
          <br /><br />
          Click on any of the example articles below to see the bi-directional links in action.
        </p>

        <div className={styles.grid}>
          {posts.map((frontMatter) => {
            const { slug, title } = frontMatter
            return (
              <Link key={slug} href={`/articles/${slug}`}>
                <a className={styles.card}>
                  <h3 className={``}>
                    {title}
                  </h3>
                </a>
              </Link>
            )
          })}
        </div>

        <p className={styles.description}>
          Check out the{' '}
            <Link href="https://github.com/joelhans/nextjs-mdx-bidirectional-links">
              <a className={styles.project}>
                GitHub project
              </a>
            </Link>
          {' '}for more information!
        </p>

      </main>
    </div>
  )
}

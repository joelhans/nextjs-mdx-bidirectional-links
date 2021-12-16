import fs from 'fs'
import glob from 'fast-glob'
import matter from 'gray-matter'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

const root = process.cwd()

export async function getSingleContent(slug) {
  const filepath = path.join(root, 'content/articles', `${slug}.mdx`)

  const { frontmatter, code } = await bundleMDX({
    file: filepath,
    cwd: path.join(root, 'src/components')
  })

  return {
    mdxSource: code,
    frontMatter: {
      slug: slug || null,
      ...frontmatter,
    },
  }
}

export async function getFrontMatter(source) {
  const files = glob.sync(`${source}/**/*.{md,mdx}`)
  if (!files.length) return []

  const allFrontMatter = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(path.extname(filepath) + '$'), '')

      const mdSource = await fs.readFileSync(filepath)
      const { data } = matter(mdSource)
      return {
        ...data,
        slug: slug,
      }
    })
  )

  return allFrontMatter
}
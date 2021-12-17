import { useMemo } from 'react'
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import Link from 'next/link'

export const MDXComponents = {
  a: Link,
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}

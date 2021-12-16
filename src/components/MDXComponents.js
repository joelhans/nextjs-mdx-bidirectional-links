import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export const MDXComponents = {

}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}

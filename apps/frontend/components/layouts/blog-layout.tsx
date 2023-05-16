import { BlogFooter, BlogHeader } from '@components/blog'
import { FunctionComponent, ReactNode } from 'react'

interface BlogLayoutProps {
  children?: ReactNode | ReactNode[]
}

/**
 * # BlogLayout
 *
 * Handle the layout of blog
 * @returns JSX.Element
 */
const BlogLayout: FunctionComponent<BlogLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      {/* header */}
      <BlogHeader />

      {/* the children content */}
      {children}

      {/* footer */}
      <BlogFooter />
    </>
  )
}

export default BlogLayout

import collectFiles from "../lib/collect_files"

export default ({ posts }) => {
  return (
    <>
      {/* <SEO title="Posts index" /> */}
      {posts.map(({ slug, title }) => (
        <ul key={slug}>
          <li>
            <a href={`/posts/${slug}.html`}>{title}</a>
          </li>
        </ul>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await collectFiles("pages/posts")
  return { props: { posts } }
}

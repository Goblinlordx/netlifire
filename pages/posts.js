import collect_files from "../lib/collect_files"

export default ({ posts }) => {
  return (
    <>
      {/* <SEO title="Posts index" /> */}
      {posts.map(({ slug, title }) => (
        <ul key={slug}>
          <li>
            <a href={`/posts/${slug}`}>{title}</a>
          </li>
        </ul>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const posts = (await collect_files("pages/posts")).map(({ date, ...o }) => ({
    ...o,
    date: date.toISOString(),
  }))
  return { props: { posts } }
}

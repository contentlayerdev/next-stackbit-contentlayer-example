import Head from "next/head"
import { format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find((post) => post.url === `/posts/${params.slug}`)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <div data-sb-object-id={post.id}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl py-8 mx-auto">
        <div className="mb-8 text-center">
          <time
            dateTime={post.date}
            className="mb-1 text-xs text-gray-600 dark:text-slate-500"
            data-sb-field-path="date"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 data-sb-field-path="title">{post.title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          data-sb-field-path="markdown_content"
        />
      </article>
    </div>
  )
}

export default PostLayout

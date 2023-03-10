import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post: Post) {
  return (
    <div className="py-6 border-b border-b-gray-600 last:border-b-0">
      <h2 className="text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900" legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600 dark:text-slate-400">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-xl py-8 mx-auto">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}

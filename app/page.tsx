import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"


// {allPosts.map((post) => (
//   <article key={post._id}>
//     <Link href={post.slug}>
//       <h2>{post.title}</h2>
//     </Link>
//     {post.description && <p>{post.description}</p>}
//   </article>
// ))}

const code = "### Farsfilm hello"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="mb-2 py-6">farsfilm</h1>
      <p><strong>farsfilm</strong> giver dig filmanbefalinger fra <i>næsten normal</i> far.</p>
      <br/>
      <p><strong>farsfilm</strong> er udivklet af <strong><i>Patrick Kjær</i></strong>. Du kan kontakte mig på <a href="mailto:p.kjr@icloud.com">p.kjr@icloud.com</a></p>
    </div>
  )
}

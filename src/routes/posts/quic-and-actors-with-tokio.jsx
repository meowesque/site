import Post from './quic-and-actors-with-tokio.md'
import './post.css'
import { onMount } from 'solid-js'
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

export default function QuicAndActorsWithTokio() {
  onMount(async () => {
    hljs.highlightAll()
    await mermaid.run({ querySelector: '.language-mermaid' })
  })

  return (
    <>
      <div class='min-h-screen bg-black text-white'>
        <div class='container w-full md:w-3/4 lg:w-216 mx-auto'>
          <Post />
        </div>
      </div>
    </>
  )
}
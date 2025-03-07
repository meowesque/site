import Post from './vanity-repositories-for-github-pages.md'
import './post.css'
import { onMount } from 'solid-js'

export default function QuicAndActorsWithTokio() {
  onMount(async () => {
    hljs.highlightAll()
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
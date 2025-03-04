import About from '../components/about'
import CupDonutHomo from '../components/cup-donut-homo'
import Profile from '../components/profile'
import SocialsBar from '../components/socials-bar'
import Post from '../components/post'
import './index.css'

export default function Index() {
  return (
    <>
      <div class='min-h-screen bg-black text-white py-8'>
        <div class='container mx-auto px-4 sm:p-0'>
          <div class='flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-8'>
            <div class='flex flex-row justify-apart h-1/3 w-full space-x-6 md:flex-col md:min-w-72 md:w-72 md:justify-none md:space-x-0 md:space-y-8'>
              <Profile />
              <SocialsBar />
            </div>
            <div>
              <div class='xl:max-w-2/3 space-y-4'>
                <div class='space-y-1'>
                  <h1 class='font-semilight text-4xl'>Maxine DeAndrade</h1>
                  <span class="font-ubuntu-sans-mono block text-medium">(λ<span class="text-[#B06DBF]">x</span>.λ<span class="text-[#729FE4]">y</span>.&lt;<span class="text-[#B06DBF]">x</span>@<span class="text-[#729FE4]">y</span>.com&gt;) <span class="text-[#B06DBF]">deandrade</span> <span class="text-[#729FE4]">posteo</span></span>
                  <span class='block text-sm pt-1'>(he/she)</span>
                </div>
                <About />
                <div class='space-y-2'>
                  <a class='flex items-center space-x-2' href='/posts'>
                    <img src='/link.svg' class='invert w-6 h-6 pt-1'/>
                    <span class='font-semilight text-3xl pt-1'>Posts</span>
                  </a>
                  <div class='space-y-2'>
                    <Post 
                      date='2025/01/27'
                      title='QUIC and Actors with Tokio' 
                      filename='quic-and-actors-with-tokio'/>
                  </div>
                </div>
                <a class='flex items-center space-x-2' href='/zettelkasten'>
                  <img src='/link.svg' class='invert w-6 h-6 pt-1'/>
                  <span class='font-semilight text-3xl pt-1'>Zettelkasten</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
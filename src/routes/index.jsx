import About from '../components/about'
import CupDonutHomo from '../components/cup-donut-homo'
import Profile from '../components/profile'
import SocialsBar from '../components/socials-bar'
import './index.css'

export default function Index() {
  return (
    <>
      <div class='min-h-screen bg-black text-white'>
        <div class='container mx-auto px-4 sm:p-0'>
          <div class='flex flex-col w-full pt-8 space-y-6 md:flex-row md:space-y-0 md:space-x-8'>
            <div class='flex flex-row justify-apart h-1/3 w-full space-x-6 md:flex-col md:min-w-72 md:w-72 md:justify-none md:space-x-0 md:space-y-8'>
              <Profile />
              <SocialsBar />
            </div>
            <div>
              <div class='xl:max-w-2/3 space-y-6'>
                <div class='space-y-1'>
                  <h1 class='font-semilight text-4xl'>Maxine DeAndrade</h1>
                  <span class="font-ubuntu-sans-mono block text-medium pl-1">(λ<span class="text-[#B06DBF]">x</span>.λ<span class="text-[#729FE4]">y</span>.&lt;<span class="text-[#B06DBF]">x</span>@<span class="text-[#729FE4]">y</span>.com&gt;) <span class="text-[#B06DBF]">deandrade</span> <span class="text-[#729FE4]">posteo</span></span>
                  <span class='block text-sm pl-1 pt-1'>he/she</span>
                </div>
                <About />
                <h1 class='font-semilight text-3xl'>Posts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*
      <div class='min-h-screen'>
        <div class='container mx-auto py-8 flex sm:space-y-8 flex-col md:flex-row md:space-x-16 justify-between'>
          <div class='w-1/6 space-y-4'>
            <div class='w-fit space-y-4'>
              <Profile />
              <SocialsBar />
            </div>
          </div>
          <div class='space-y-6'>
            <div>
              <h1 class='text-4xl font-medium'>Maxine DeAndrade</h1>
              <span class='font-ubuntu-sans-mono block text-sm'>(λ<span class='text-[#B06DBF]'>x</span>.λ<span class='text-[#729FE4]'>y</span>.&lt;<span class='text-[#B06DBF]'>x</span>@<span class='text-[#729FE4]'>y</span>.com&gt;) <span class='text-[#B06DBF]'>deandrade</span> <span class='text-[#729FE4]'>posteo</span></span>
              <span class='text-sm font-medium'>(he/she)</span>
            </div>
            <div class='space-y-6'>
              <div class=''>
                <p class='text-sm block font-medium'>
                  <span class='font-medium'>
                    Software engineer with a passion for formal verification and systems programming, ardently
                    exploring pure mathematics in my free time.
                  </span>
                  Talk to me about HoTT, CuTT, Martin-Löf Type Theory and Category Theory!
                </p>
              </div>
              <div class=''>
                <h2 class='text-3xl font-medium'>Posts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
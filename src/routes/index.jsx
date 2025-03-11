
import { A } from '@solidjs/router'
import About from '../components/about'
import Profile from '../components/profile'
import SocialsBar from '../components/socials-bar'
import Post from '../components/post'
import ReadingList from '../components/reading-list'
import './index.css'
import Project from '../components/project'

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
                  <div class='flex flex-row items-center space-x-3'>
                    <h1 class='font-semilight text-4xl'>Maxine DeAndrade</h1>
                    <a href='/rss.xml'>
                      <img src='/svg/rss.svg' class='invert w-7 h-7 mt-0.5' />
                    </a>
                  </div>
                  <span class="font-ubuntu-sans-mono block text-medium">(λ<span class="text-[#B06DBF]">x</span>.λ<span class="text-[#729FE4]">y</span>.&lt;<span class="text-[#B06DBF]">x</span>@<span class="text-[#729FE4]">y</span>.esq&gt;) <span class="text-[#B06DBF]">md</span> <span class="text-[#729FE4]">meow</span></span>
                  <span class='block text-sm pt-1'>(he/she)</span>
                </div>
                <div class='space-y-2 lg:grid lg:grid-cols-2 lg:gap-4'>
                  <div class='space-y-2'>
                    <div class='flex items-center space-x-2'>
                      <A class='flex items-center space-x-2' href='/posts'>
                        <img src='/svg/link.svg' class='invert w-6 h-6 pt-1' />
                        <span class='font-semilight text-3xl pt-1'>Posts</span>
                      </A>
                    </div>
                    <div class='space-y-2'>
                      <Post
                        date='2025/03/07'
                        title='Vanity Repositories for GitHub Pages'
                        filename='vanity-repositories-for-github-pages'
                        description='Deploying GitHub Pages from a separate repository' />
                      <Post
                        date='2025/02/27'
                        title='QUIC and Actors with Tokio'
                        filename='quic-and-actors-with-tokio'
                        description='Introduction to quinn-rs and actors in Rust' />
                    </div>
                  </div>
                  <div class='space-y-2'>
                    <A class='flex items-center space-x-2' href='/projects'>
                      <img src='/svg/link.svg' class='invert w-6 h-6 pt-1' />
                      <span class='font-semilight text-3xl pt-1'>Projects</span>
                    </A>
                    <div class='space-y-2'>
                      <Project 
                        title='ivy'
                        description='Remote backup and restoration management tool'
                        href='https://github.com/meowesque/ivy' />
                      <Project 
                        title='catk'
                        description='C Analysis Toolkit'
                        href='https://github.com/meowesque/catk' />
                      <Project 
                        title='isopod'
                        description='ISO 9660 library'
                        href='https://github.com/meowesque/isopod' />
                    </div>
                  </div>
                  <div class='space-y-2'>
                    <A class='flex items-center space-x-2' href='/zettelkasten'>
                      <img src='/svg/link.svg' class='invert w-6 h-6 pt-1' />
                      <span class='font-semilight text-3xl pt-1'>Zettelkasten</span>
                    </A>
                  </div>
                  <div class='space-y-2'>
                    <A class='flex items-center space-x-2 whitespace-nowrap' href='/reading-lists'>
                      <img src='/svg/link.svg' class='invert w-6 h-6 pt-1' />
                      <span class='font-semilight text-3xl pt-1'>Reading Lists</span>
                    </A>
                    <div class='space-y-2'>
                      <ReadingList title='Category Theory' filename='category-theory'/>
                      <ReadingList title='Type Theory' filename='type-theory'/>
                      <ReadingList title='Scheme Implementation Details' filename='scheme-implementation-details'/>
                      <ReadingList title='Algebraic Geometry' filename='algebraic-geometry'/>
                      <ReadingList title='SPJ Paper Trail' filename='spj-paper-trail'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
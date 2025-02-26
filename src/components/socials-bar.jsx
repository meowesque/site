export default function SocialsBar() {
  return (
    <div class='flex justify-between w-1/5 flex-col md:flex-row md:w-full md:space-y-0 md:size-16'>
      <a class='rounded-xs hover:bg-[#1B1F24] transition-colors ease-out duration-100 bg-black aspect-square grid items-center'
        href='https://github.com/maxinedeandrade'>
        <img src='/github.svg' class='w-3/5 h-3/5 invert mx-auto' />
      </a>
      <a class='rounded-xs hover:bg-[#e2432a] transition-colors ease-out duration-100 bg-black aspect-square grid items-center'
        href='https://gitlab.com/maxinedeandrade'>
        <img src='/gitlab.svg' class='w-3/5 h-3/5 invert mx-auto' />
      </a>
      <a class='aspect-square grid items-center' href='https://youtube.com/@mdeandrade'>
        <svg
          class='rounded-xs transition-colors ease-out duration-100 hover:fill-red-600 mx-auto w-full h-full'
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-143 145 512 512" xml:space="preserve">
          <g>
            <polygon points="78.9,450.3 162.7,401.1 78.9,351.9" />
            <path d="M-143,145v512h512V145H-143z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5
                    c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z"/>
          </g>
        </svg>
      </a>
      <a class='aspect-square grid items-center' href='https://www.linkedin.com/in/maxine-deandrade-11117b352/'>
        <svg
          class='rounded-xs transition-colors ease-out duration-100 hover:fill-[#2164f4] mx-auto w-full h-full'
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-143 145 512 512" xml:space="preserve">
          <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
                  c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
                  c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
                  c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
        </svg></a>
    </div>
  )
}
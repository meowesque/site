import { A } from '@solidjs/router'

export default function Post(props) {
  return (
    <div class='space-y-1 flex flex-col md:space-y-0 md:flex-row-reverse md:justify-end'>
      <div>
        <A class='text-md underline underline-offset-4' href={'/reading-lists/' + props.filename}>
          <span>{props.title}</span>
        </A>
      </div>
      <div class='md:pr-2'>
        <span class='text-sm font-ubuntu-sans-mono'>{props.date}</span>
      </div>
    </div>
  )
}
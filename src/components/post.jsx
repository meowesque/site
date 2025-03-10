import { A } from '@solidjs/router'

export default function Post(props) {
  return (
    <div class='space-y-0 flex flex-col'>
      <div>
        <A class='text-md underline underline-offset-4' href={'/posts/' + props.filename}>
          <span>{props.title}</span>
        </A>
      </div>
      <div>
        <span class='text-sm text-white/70'>{props.description}</span>
      </div>
      <div class='md:pr-2'>
        <span class='text-sm text-white/70 font-ubuntu-sans-mono'>{props.date}</span>
      </div>
    </div>
  )
}
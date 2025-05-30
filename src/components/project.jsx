import { A } from '@solidjs/router'

export default function Project(props) {
  return (
    <div class='space-y-0 flex flex-col'>
      <div>
        <A class='text-md underline underline-offset-4' href={props.href}>
          <span>{props.title}</span>
        </A>
      </div>
      <div>
        <span class='text-sm text-white/70'>{props.description}</span>
      </div>
    </div>
  )
}
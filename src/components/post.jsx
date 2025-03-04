export default function Post(props) {
  return (
    <div class='space-y-1 flex flex-col md:space-y-0 md:flex-row-reverse md:justify-end'>
      <div>
        <a class='text-md underline underline-offset-4' href={'/#/posts/' + props.filename}>
          <span>{props.title}</span>
        </a>
      </div>
      <div class='md:pr-2'>
        <span class='text-sm font-ubuntu-sans-mono'>{props.date}</span>
      </div>
    </div>
  )
}
export default function Profile() {
  return (
    <div class='relative aspect-square size-full'>
      <div class='absolute w-1 min-w-1 top-0 left-0 h-full'>
        <div class='h-1/5 rounded-tl-xs bg-[#EE79AB]'></div>
        <div class='h-1/5 bg-[#FDF44C]'></div>
        <div class='h-1/5 bg-[#FFFFFF]'></div>
        <div class='h-1/5 bg-[#B06DBF]'></div>
        <div class='h-1/5 rounded-bl-xs bg-[#729FE4]'></div>
      </div>
      <img class='aspect-square w-full h-full rounded-xs' src='https://avatars.githubusercontent.com/u/163779298?s=400&u=f0dc1184ce22232579bd7de7f51aa142f4160f60&v=4' />
    </div>
  )
}
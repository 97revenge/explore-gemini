import ChatContainer from '@/components/component/chat-container'

const explores = ['humanize', 'matematica', 'filosfia', 'portugues', 'enem.ai']

export default function Page({
  params,
}: {
  params: {
    slug: 'github'
  }
}) {
  return (
    <>
      <div className="">
        <ChatContainer />
      </div>
    </>
  )
}

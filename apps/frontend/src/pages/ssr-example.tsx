import type { GetServerSideProps } from 'next'

type Props = {
  time: string
}

export default function SSRPage({ time }: Props) {
  console.log(99998, "I am from SSR PAGE")
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Current server time: {time}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const time = new Date().toISOString()
  console.log(999918, "You cannot see me in the console.log in dev tool")
  return {
    props: {
      time,
    },
  }
}

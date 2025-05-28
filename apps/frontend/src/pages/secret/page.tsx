import { FC } from "react"

type Greeting = {
  name: string
}

const Secret: FC<Greeting> = ({ name }) => {
  return <div>{`Hello ${name}!`}</div>
}

export default Secret

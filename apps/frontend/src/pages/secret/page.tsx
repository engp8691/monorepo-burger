import { FC } from "react"

<<<<<<< HEAD
type Greating = {
    name: string
}
export const Secret: FC<Greating> = ({name})=>{
    return <div>`Hello ${name}!`</div>
}
=======
type Greeting = {
  name: string
}

const Secret: FC<Greeting> = ({ name }) => {
  return <div>{`Hello ${name}!`}</div>
}

export default Secret
>>>>>>> 00ddd176342f61b4ab406c373a5ad19416828fa7

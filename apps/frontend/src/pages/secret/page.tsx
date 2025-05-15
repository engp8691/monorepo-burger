import { FC } from "react"

type Greating = {
    name: string
}
export const Secret: FC<Greating> = ({name})=>{
    return <div>`Hello ${name}!`</div>
}
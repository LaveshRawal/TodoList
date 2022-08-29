import {FC} from 'react'

interface propstype {

  length:number;
}
const Footer:FC<propstype> = ({length}) => {

  
  return (
    <footer>
          <p>{length} List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer
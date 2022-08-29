import {FC} from 'react'

interface propstype {
    item:{id:number, checked:boolean, item:string }[],
    setItem:{},
    handleCheck:(id:number)=> void;
    handleDelete:(id:number)=> void;
}

const ItemList:FC<propstype> = ({item,setItem,handleCheck,handleDelete}) => {
    // Fetching list from Content component
  return (
    <>

    </>
  )
}

export default ItemList
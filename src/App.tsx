import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import "../src/App.css"
import { useState } from 'react';

function App() {

   const [item,setItem] = useState<{id:number, checked:boolean, item:string}[]>([
   
    {
      id:1,
      checked: true,
      item:'Bread',
    },
    {
      id:2,
      checked: false,
      item:'Butter',
    },
    {
      id:3,
      checked: false,
      item:'Milk',
    },
  ]);
  
  // To check uncheck and return new items list 
  const handleCheck =(id:number)=>{
  const listItems = item.map((item: { id: number; checked: boolean; item:string; })=> item.id === id ? {...item, checked: !item.checked }: item);
  setItem(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  //console.log(`key ${id}` );
    
  }
  // To Delete the items from list
  const handleDelete = (id:number)=>{
  const listItems = item.filter((items: { id: number; checked: boolean; item:string; })=> items.id !== id);
  //console.log(`key ${id}` );
  setItem(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
 
 return (
    <div className='App'>
        <Header title='Groceries' />   
        <Content 
        
        item={item}
        
        setItem={setItem}
        
      handleCheck={handleCheck}

     handleDelete={handleDelete}
     
     />

        <Footer length={item.length}/>
   </div>
  )
}


export default App;

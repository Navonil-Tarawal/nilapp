import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(
  Menu.map((curElem)=>{
  return curElem.catagory;
}))]
console.log(uniqueList)

const Restrurant = () => {
   const[menuData, setMenuData] = useState(Menu)

   const filterItem = (catagory) =>{
    const updatedList = Menu.filter((curElem)=>{
        return curElem.catagory === catagory;
    })
    setMenuData(updatedList);
   };
  
    
  return (
    <>  
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={() => filterItem("snack")}>Snacks</button>
        <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>

      </div>

    </nav>
   <MenuCard menuData={menuData}/>

   <Navbar/>
    </>
  )
}

export default Restrurant
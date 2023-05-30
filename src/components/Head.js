import React from 'react'
import '../Home.css'
import {IoCartOutline, IoHelpCircleOutline, IoPeopleCircleOutline, IoSearchOutline} from "react-icons/io5";

function App(){
  return(
    <nav className='header'>
      <div className='search_logo'>
        <IoSearchOutline className='icon'/>
      </div>
      <div className='search_box'>
        <input className='search_input' type='text' placeholder='Busqueda...'/>
      </div>
      <div className='help_shop_log'>
        <div></div>
        <IoHelpCircleOutline className='icon'/>
        <IoCartOutline className='icon'/>
        <IoPeopleCircleOutline className='icon'/>
      </div>
    </nav>
  );
}

export default App;
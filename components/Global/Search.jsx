import React from 'react'

const Search = () => {
  return (
    <div className='techwave_fn_searchbar'>
      <div className='search__bar'>
      <input
       type='text'
       className='search__input'
       placeholder='Search here..'
       />
       <img 
       src='img/lighticon/light-5.png'
       alt=''
       className='fn__svg search__icon'/>

       <span className='search__closer'>
        <img src='img/lighticon/light-18.png'
        className='fn__svg' alt=''/>
       </span>
         </div>
         
       <div className='search__results'>
        <div className='results__title'>Results</div>
        <div className='results__list'>
        <ul>
          <li>
            <a href='#'>Artifical Intelligence</a>
          </li>
            <li>
            <a href='#'>Learning about the impact of AI crypto trading bot </a>
          </li>
            <li>
            <a href='#'>Welcome to the @theblockchaincoder Developer guide</a>
          </li>
            <li>
            <a href='#'>Take the Blockchain advance Development course</a>
          </li>
        </ul>
      </div>
      </div>
      </div>
    
      
      
    
     


  
  )
}

export default Search
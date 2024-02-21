import React, { useState, useEffect } from 'react'

const Header = ({ networkName, setActiveComponent }) => {
  const [userDetails, setUserDetails] = useState({});
  const [userMembership, setUserMembership] = useState();
  // const [isSearchVisible, setIsSearchVisible] = useState(false);
  
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    const userMembership = localStorage.getItem('USER_MEMBERSHIP');

    setUserMembership(userMembership);
    setUserDetails(user);

  }, []);

  // //Toogle search visiblity
  // const toggleSearchVisibility = () => {
  //   setIsSearchVisible(!isSearchVisible)
  // };

  return (
    <div className='techwave_fn_header'>
      <div className='header__left'>
        <div className='fn__token_info'>
          <span className='token_summary'>
            <span className='count'>AC</span>
            <span className='text'>{networkName}</span>
          </span>

          {
            userMembership !== 'notMember' ? (
              <a onClick={() => setActiveComponent
                ('Trading')} className='token_upgrade techwave_fn_button'>
                  <span>Start Trade</span>
              </a>
            ) : (
               <a
                onClick={() => setActiveComponent
                  ('Pricing')}
                 className='token_upgrade techwave_fn_button'>
                  <span>Upgrade</span>
                </a>
            )}
        </div>
      </div>

      <div className='header__right'>
        <div className='fn__nav_bar'>
          <div className='bar__item bar__item_search'>
           <div className='item_opener' title='Search'>
            {/* onClick={toggleSearchVisibility}>  */}
             <img src='img/lighticon/light-5.png' className='fn__svg' alt=''/>
            </div>
            <div className='item_popup' data-position='right'>
              <input type='text' placeholder='search' />
              </div>
                </div>
            

            <div className='bar__item bar__item_user'>
              <a
              onClick={() => setActiveComponent('Profile')}
              className='user_opener fn__tooltip'>
                <img src={userDetails?.image || "img/crypto.png"} alt=''/>
              </a>
             </div> 
             </div>
         
        </div>
    </div>
  );
};

export default Header
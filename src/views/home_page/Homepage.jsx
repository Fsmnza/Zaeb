import React from 'react';
import { useState } from 'react';
import AuthModal from '../account/AuthModal';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [showModal, setShowModal] =useState(false)

  const[isSignUp, setIsSignUp] = useState(false)
  const authToken = false
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/boarding'); 
  };

  const handleClick = () => {
    console.log('Clicked')
    setShowModal(true)
    setIsSignUp(true)
  }

  const handleClickLogin = () => {
    console.log('Clicked')
    setShowModal(true)
    setIsSignUp(false)
  }

  return(
    <div className="h-full flex">
      <div className="my-auto w-full">
        <h1 className='text-center text-3xl mb-8'>Dating app</h1>
        <div className='w-full items-center justify-center flex'>
          <button className="bn29" onClick={handleClick}>
            {authToken ? 'SignOut' : 'Create Account'}
          </button>
        </div>
        {!authToken && (
          <div className='w-full items-center justify-center flex mt-5'>
            <button className="bn29" onClick={handleClickLogin}>
              {authToken ? '' : 'Login'}
            </button>
          </div>
          
        )}
      <div className='w-full items-center justify-center flex mt-5'>
        <button className="bn29" type="button" onClick={handleClick1}>Profile settings</button>
      </div>  
      </div>
      {showModal && (
          <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
        )}
          
    </div>
    
  )
};

export default HomePage;

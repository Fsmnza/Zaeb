import React from 'react';
import AuthModal from './AuthModal.jsx';

const Accountpage = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);

  return (
      <div className="container">
        <div className="header">
          <h1>Your Dating App</h1>
        </div>

        <div className="content">
          <h2>Account</h2>

          {/* Login Form */}
          <div className="login-form">
            <h3>Login</h3>
            <button onClick={() => setShowLoginModal(true)}>Login</button>
          </div>

          {/* Signup Form */}
          <div className="signup-form">
            <h3>Sign Up</h3>
            <button onClick={() => setShowSignUpModal(true)}>Sign Up</button>
          </div>
        </div>

        {/* Модальное окно для входа */}
        {showLoginModal && (
            <AuthModal setShowModal={setShowLoginModal} isSignUp={false}/>
        )}

        {/* Модальное окно для регистрации */}
        {showSignUpModal && (
            <AuthModal setShowModal={setShowSignUpModal} isSignUp={true}/>
        )}
      </div>
  );
};

export default Accountpage;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const AccountPage = () => {
//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log('Login button clicked');
//   };

//   const handleSignup = () => {
//     // Implement your signup logic here
//     console.log('Signup button clicked');
//   };

//   return (
//     <div>
//       <h2>Account Page</h2>
//       <div>
//         <h3>Login</h3>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       <div>
//         <h3>Signup</h3>
//         <button onClick={handleSignup}>Signup</button>
//       </div>
//       <div>
//         <p>If you don't have an account, you can sign up.</p>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;

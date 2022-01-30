import React,{useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';

const Login = () => {
  const clientId="1018716229389-5fe1d2ufajqlcrui3vnk3i8bvnltemk9.apps.googleusercontent.com";
const [showLoginButton,setShowLoginButton ] =useState(true);
const [showLogoutButton,setShowLogutButton]=useState(false);

  const  onLoginSuccess=(res)=>{
    console.log('Login Success:',res.profileObj);
    setShowLoginButton(false);
    setShowLogutButton(true);
  }

  const onFailureSuccess=(res)=>{
    console.log('Login failed: ',res);
  }

  const onSignoutSuccess=()=>{
          alert("You have been SignOut Successfully..");
          setShowLoginButton(true);
    setShowLogutButton(false);
    console.clear();
  }

  return (
    <div>         {showLoginButton ?
                  <GoogleLogin
                        clientId={ clientId}
                         buttonText="Login"
                          onSuccess={onLoginSuccess}
                         onFailure={onFailureSuccess}
                         cookiePolicy={'single_host_origin'}
                /> :null
                 }

                {/* Logout */}
                {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                       >
               </GoogleLogout> :null
            }

    </div>
  )
}

export default Login

import React, { useContext } from 'react'
import '../styles/style_header.css'
import {Link} from 'react-router-dom'
import {FirebaseContext} from '../context/firebase.jsx'

function Header() {

    const context=useContext(FirebaseContext);
    console.log(context);
  
  return (
    <div className="header">
        <Link to={'/'}>
            <h1 className='logoname'>eASYCYCLE</h1>
        </Link>
        
        <div className="navbar">
            <Link to={'/about'}>
                <h1>About</h1>
            </Link>

            <Link to={'/faqs'}>
                <h1>FAQs</h1>
            </Link>
        </div>

        <button className='signinbtn' onClick={()=>{
            context.signIn();
        }}>Sign In</button>

    </div>
  )
}

export default Header;

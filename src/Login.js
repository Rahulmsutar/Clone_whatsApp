import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './Firebase'
import './login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

const [{user},dispatch]= useStateValue();
console.log(user)
const signIn = () =>{
    auth.signInWithPopup(provider).then(result =>{
       dispatch({
           type: actionTypes.SET_USER,
           user: result.user,
       })
    }).catch((error)=>alert(error.message));
}


    return (
        <div className='login'>
            <div className='login_container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/>
                <div className='login_text'>
                    <h1>sign in to whatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login

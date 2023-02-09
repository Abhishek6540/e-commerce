import React, {useState} from 'react'
import NoteContext from './NoteContext'

function NotState(props) {

    const [isLogin,setIsLogin] = useState(false);
    const [user, setUser] =useState("")
    
  return (
    <NoteContext.Provider value={{isLogin,setIsLogin, user,setUser}}>
      {props.children}

    </NoteContext.Provider>
  )
}


export default NotState;
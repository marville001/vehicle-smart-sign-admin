import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext';
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = ({history:{push}}) => {

  // const {user} = useContext(AuthContext);
  // if(!user){
  //   push("/login")
  // }

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout

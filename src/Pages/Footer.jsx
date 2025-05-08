// import React from 'react'
// import { useContext } from 'react'

// const Footer = () => {
//     const phone=useContext(AppContext)
//   return (
//     <div>Footer
//         <h3>phone:{phone} </h3>
//     </div>
//   )
// }

// export default Footer;

import React, { useContext } from 'react'
import {data,data1} from '../App'

const Footer = () => {
   const name=useContext(data);
   const gender=useContext(data1)
  return (
    <>
    {/* <data.Consumer>

    {
        (name)=>{
            return (
                <h1>my name is {name}</h1>
            )
        }
    }
    </data.Consumer> */}
   
    <h3>my name is {name} and my gender is {gender}</h3>
  
    </>
  )
}

export default Footer
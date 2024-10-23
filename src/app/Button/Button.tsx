"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = () => {
 const rout= useRouter()
    return (
      <div>
       
      <button onClick={()=>rout.push("/about")}>i m button</button>
    </div>
  )
}

export default Button

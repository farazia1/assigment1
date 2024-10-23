//'use client'
import React from "react"
import Link from "next/link"
import Button from "./Button/Button"
import EyesPage from "./eyes/page"
//import { useRouter } from "next/navigation"
export default function Home() {
  
  return <div className="flex flex-col min-h-screen flex-grow">
   
  <EyesPage/>
    
   
  </div>
}
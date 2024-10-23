import React from "react"
import Link from "next/link"  // Import the Link component

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <div className= "text-white  flex justify-between">
        <h1 className="m-4 text-xl">Navbar</h1>
        <ul className="flex gap-4 m-3">
          {/* Use Next.js Link component for navigation */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li> {/* Link to the About page */}
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">services</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
         </ul>
      </div>
    </div>
  )
}

export default Navbar

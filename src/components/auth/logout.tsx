"use client"
import React from 'react'
import { Button, Popover, PopoverContent, PopoverTrigger } from '../ui'
import { FaUser, FaUserCircle } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import axios from 'axios'
import { useRouter } from 'nextjs-toploader/app'

function Logout({ user }: { user: { email: string } }) {
    console.log(user);
    
    const router = useRouter();
    const handleLogOut = async () => {
    try {
      await axios.get(`/api/auth/logout`, { withCredentials: true });
        router.push("/");
        } catch (error) {
      console.error("Error logging out:", error);
        }
    };
  return (
    <div className='h-screen flex justify-center items-center'>
      
       
          <div className="flex items-center gap-3 py-2 px-2 rounded">
            <FaUserCircle />
            <p>{user.email}</p>
          </div>
          <Button onClick={handleLogOut} className="flex items-center gap-1">
            <IoIosLogOut />
            <p>Log out</p>
          </Button>
    </div>
  )
}

export default Logout

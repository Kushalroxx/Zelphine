"use client"
import React, { useState } from 'react'
import {z} from "zod"
import axios, { AxiosError } from 'axios'
import { useRouter } from 'nextjs-toploader/app'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '../ui'

function SignIn() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8,"enter a valid password")
  })
  const onSubmit = async() => {   
    setError("")
    const data = schema.safeParse({email, password})
    if (data.error?.errors[0]?.message) {
      setError(data.error.errors[0].message)
      return;
    }
    try {
      setLoading(true)
      const res = await axios.post(`/api/auth/login`,{
        email,
        password
      },{withCredentials:true})
        setLoading(false)
       router.push("/admin/dashboard")
    } catch (error:any) {
      setLoading(false)
      console.log(error);
      
      if(error instanceof AxiosError){
        if(error.response?.data?.message){
          setError(error.response.data.message)
          return 
        }else{
          setError(error.message)
        }
      }
    }finally{
      setLoading(false)
    }
  }
  return (
 <Card>
  <CardHeader>
    <h1 className="text-lg md:text-xl font-bold">
      Hey there! <br></br> Welcome back 👋
    </h1>
    <p className="text-muted-foreground text-sm mt-1">
      Please enter your Email and Password to sign in.
    </p>
  </CardHeader>

  <form onSubmit={(e) => e.preventDefault()}>
    <CardContent className="flex flex-col gap-4">
      <div>
        <CardTitle className="text-base mb-1">Email</CardTitle>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <CardTitle className="flex justify-between items-center mb-1">
          <span>Password</span>
        </CardTitle>
        <div className="relative">
          <Input
            className="pr-10"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            type={showPassword ? "text" : "password"}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPassword((e) => !e)}
            className="absolute inset-y-0 rounded-l-none right-0 px-3"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </Button>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button disabled={loading} onClick={onSubmit} type="submit">
        {/* {loading ? <DotLoader size={20} className="text-primary" /> : "Sign In"} */}
      </Button>
    </CardContent>
  </form> 
</Card>

  )
}

export default SignIn

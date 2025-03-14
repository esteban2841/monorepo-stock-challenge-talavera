/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { FormEvent, useContext } from "react"
import { CustomButton, CustomInput, CustomText } from "@/atoms"
import { useRouter } from "next/navigation"
import { StockContext } from "@/context"
import axios from "axios"

export const LoginForm = () => {


  const uri = process.env.NEXT_PUBLIC_CLIENT_KEY_BACKEND_URI
  const router = useRouter()
  const { toggleSideBarMenu, setUserLogged } = useContext(StockContext)
  
  const handleRegister = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const formData = {
      email: new FormData(e.currentTarget).get('correo'),
      password: new FormData(e.currentTarget).get('contraseña'),
    }
    
    const data = JSON.parse(JSON.stringify(formData))
    
    try {
      const loginResponse = await axios.post(
        `${uri}/api/auth/login`,
        {
          ...data
        }
      )
      if(loginResponse.status == 200){
        const user = loginResponse.data.token
        localStorage.setItem('user', JSON.stringify(user.user))
        setUserLogged && setUserLogged(user.user)
        localStorage.setItem('authToken', JSON.stringify(user.token))
        toggleSideBarMenu && toggleSideBarMenu('')
        router.push('/stock')
      }
    } catch (error: any) {
      error || 'Algo salio mal. Por favor intentelo de nuevo'
    }

  }

  return (
    <form onSubmit={(e)=>handleRegister(e)} className='flex flex-col justify-start w-full py-8 rounded-lg items-start gap-4 text-black'>
        <div className='flex flex-col gap-4 text-white rounded-md w-full bg-black p-6'>
            <CustomText content="Inicia sesión" type="subtitle" colorText="'#fff'" bold={true} position="left" />
            <CustomInput name="correo" content="correo" theme="dark" type="text" withLabel={false}/>
            <CustomInput name="contraseña" content="contraseña" theme="dark" type="password" withLabel={false}/>
            <CustomButton bg="white" colorText="black" bold={true} hoverColor="white" hoverBg="rgb(23 37 84)"  type="submit" content="Iniciar sesión" action="userLogin"/>       
        </div>
    </form>
  )
}

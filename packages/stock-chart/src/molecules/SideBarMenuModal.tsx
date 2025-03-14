'use client'
import { StockContext } from "@/context"
import { useContext } from "react"
import styled from "styled-components"
import { CustomButton } from "@/atoms"
import { LoginForm, RegisterForm } from "@/molecules"
import Account from "@/atoms/Account"

const Overlay = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
    z-index: 200;
    background-color: rgb(0,0,0, 0.5);
`


const SideBarModal = styled.aside`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 500px;
    height: 100%;
    background-color: white;
    padding: 20px;
    overflow-y: scroll;

`

export const SideBarMenuModal = () => {
    const { activeSideBarMenu } = useContext(StockContext)


    const ActiveMenuUi = (menu : string)=>{
        if( !menu ){
            return (
                <>
                </>
            )
        }
        if( menu == 'login' ){
            return (
                <Overlay>
                    <SideBarModal>
                        <CustomButton args={''} action="toggleSideBarMenu" size="'20'" content="X" type="close" bg="#000" colorText="#fff" hoverBg="rgb(56 189 248)"  hoverColor="rgb(8 51 68)"/>
                        <LoginForm/>

                    </SideBarModal>
                    {/* <div className="flex flex-col w-full items-center">
                        INGRESAR
                    </div> */}
                </Overlay>
            )
        }
        
        if( menu == 'registro' ){
            return (
                <Overlay>
                    <SideBarModal>
                        <CustomButton args={''} action="toggleSideBarMenu" size="'20'" content="X" type="close" bg="#000" colorText="#fff" hoverBg="rgb(56 189 248)"  hoverColor="rgb(8 51 68)"/>
                        <RegisterForm/>

                    </SideBarModal>
                    {/* <div className="flex flex-col w-full items-center">
                        INGRESAR
                        </div> */}
                </Overlay>
            )
        }

        if( menu == 'account' ){
            return (
                <Overlay>
                    <SideBarModal>
                        <CustomButton args={''} action="toggleSideBarMenu" size="'20'" content="X" type="close" bg="#000" colorText="#fff" hoverBg="rgb(56 189 248)"  hoverColor="rgb(8 51 68)"/>
                        <Account/>

                    </SideBarModal>
                    {/* <div className="flex flex-col w-full items-center">
                        INGRESAR
                        </div> */}
                </Overlay>
            )
        }
        
    }

  return (
    ActiveMenuUi(activeSideBarMenu || '')
  )
}

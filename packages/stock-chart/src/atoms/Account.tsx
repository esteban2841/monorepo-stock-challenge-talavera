import { useRouter } from "next/navigation"
import { CustomText } from "./CustomText"
import { useContext } from "react"
import { StockContext } from "@/context"

const Account = () => {

    const router = useRouter()
    const {usuario} = useContext(StockContext)


    const redirect = ()=>{
        router.push(`/holdings/${encodeURIComponent(usuario.email)}`);
    }
    return (
        <div style={{
            height: "100%"
        }} className="w-full text-black flex flex-col justify-between items-center">
            <div className="flex flex-col justify-start items-center">
                <span className="cursor-pointer" onClick={redirect}>
                    <CustomText type="catalog" content="My holdings"/>
                </span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span>
                    <CustomText type="catalog" content="Logout"/>
                </span>

            </div>
        </div>
    )
}

export default Account

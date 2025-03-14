import { Background3DModel, CustomText } from "@/atoms";
import { NavBar, Object3DRenderer } from "@/molecules";
import { Suspense } from "react";
const defaultUrl = process.env.PROD_DOMAIN
? `https://${process.env.PROD_DOMAIN}`
: process.env.NEXT_PUBLIC_CLIENT_KEY_DEVELOPMENT_URI;

const BackgroundModel3D = {
  children: <Background3DModel />,
  name: 'Background',
  context: false
}

export default function Home() {
  return (
    <div className="flex flex-col w-full relative justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={
        <nav className="flex flex-row w-full bg-black h-[50px]">
        </nav>
      }>
        <NavBar baseUrl={defaultUrl} />
      </Suspense>
      <div className="w-full z-10 flex h-[90vh] relative flex-row items-center justify-center overflow-hidden">

        <Object3DRenderer name={BackgroundModel3D.name} context={BackgroundModel3D.context}>
          {BackgroundModel3D.children}
        </Object3DRenderer>  
        <div className="flex w-full max-w-[1000px] justify-start items-start flex-col gap-8">
          <CustomText type="catalog" content="Trading for" />
          <CustomText type="shadowTitle" content="Instantly access to invest from anywhere at any moment" />
        </div>
      </div>
    </div>
  );
}

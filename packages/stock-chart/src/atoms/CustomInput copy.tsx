'use client'
interface CustomInputProps {
    type: 'text' | 'number' | 'checkbox' | 'password'
    colorText?: string
    bold?: boolean
    content: string
    theme: 'dark' | 'bright' | 'check'
    withLabel: boolean
    name: string
  }
  const template = (theme: string, colorText?: string, bold?: boolean) : string => {
    const styles : any = {
      dark: `w-full px-4 py-2 border border-white bg-black caret-${colorText} placeholder-${colorText} rounded text-${colorText} ${bold ? 'font-bold': ''}`,
      bright: `w-full px-4 py-2 border border-black bg-white caret-${colorText} placeholder-${colorText} rounded text-${colorText} ${bold ? 'font-bold': ''}`,
      check: `rounded text-${colorText} ${bold ? 'font-bold': ''}`,
    }
    return styles[theme]
  }
  
  
  export const CustomInput = ({type, colorText, bold, content, theme, withLabel, name}: CustomInputProps) => {
    return <div className={`w-full flex flex-row justify-between text-${colorText} items-center gap-2`}>
        {withLabel &&  <label htmlFor="custom-input">{content + ': '}</label>}
        <input id="custom-input" required={true} name={name} type={type} className={template(theme, colorText, bold)} placeholder={content}/>
    </div>
  }
  
import React, {ReactNode} from 'react'
import { Button as ButtonMdn } from "@/components/ui/button"
type ButtonProps = {
    btnText: string;
    icon?: ReactNode;
}
const Button = ({btnText, icon} : ButtonProps) => {
    return (
        <div>
            <ButtonMdn className='uppercase font-light h-9 rounded-3xl px-6 py-8'>{icon} <p className='ml-3'>{btnText}</p></ButtonMdn>
        </div>
    )
}

export default Button
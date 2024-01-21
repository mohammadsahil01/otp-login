import { useEffect, useRef, useState } from "react";
import { handleChange } from "../lib/utils";


const OtpInput = ({ length, OtpSubmit }: { length: number; OtpSubmit: any }) => {
    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus()
        }
    },[])
    const inputRef = useRef<HTMLInputElement[]>([])
    const [otp,setOtp]= useState(new Array(length).fill(""))

    const handleInputChange =(index:number)=>(e: React.ChangeEvent<HTMLInputElement>)=>{
        handleChange({
            index,
            e,
            otp,
            setOtp,
            inputRef,
            OtpSubmit // Replace with your actual OtpSubmit function
          });
    }

    const onclick = (index:number)=>{inputRef.current[index].setSelectionRange(1,1)}
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && e.currentTarget.value === "") {
            // Handle the Backspace key
                e.preventDefault();
                // Move focus to the previous input field
                if(index>=1){
                    inputRef.current[index - 1].focus();  
                }
                       
        }
    };
    
    
    return ( <div className="mt-3">
        {
            otp.map((value,index)=>{
                return (
                    <input className="border border-black 
                    w-8 h-8 p-2 mx-2"
                    ref={(input)=>(inputRef.current[index]=input!)}
                    key={index} type="text" onChange={handleInputChange(index)} maxLength={1}
                    onClick={()=>onclick(index)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    />
                )
            })
        }
    </div> );
}
 
export default OtpInput;
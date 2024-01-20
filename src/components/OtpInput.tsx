import { useEffect, useRef, useState } from "react";


const OtpInput = ({ length, onOtpSubmit }: { length: number; onOtpSubmit: any }) => {
    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus()
        }
    },[])
    const inputRef = useRef<HTMLInputElement[]>([])
    const [otp,setOtp]= useState(new Array(length).fill(""))
    const handleChange = (index: number,e: React.ChangeEvent<HTMLInputElement> ) => {
        if(index+1<4)
        inputRef.current[index+1].focus()
    };

    const onclick = (index:number)=>{console.log(index)}
    const handleKeyDown = (index:number,e:any)=>{}
    
    
    console.log(inputRef);
    
    return ( <div className="mt-3">
        {
            otp.map((value,index)=>{
                return (
                    <input className="border border-black 
                    w-8 h-8 p-2 mx-2
                    "
                    ref={(input)=>(inputRef.current[index]=input!)}
                    key={index} type="text" onChange={((e)=>handleChange(index,e))} maxLength={1}
                    onClick={()=>onclick(index)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    />
                )
            })
        }
    </div> );
}
 
export default OtpInput;
import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
   const [number,setNumber]=useState("")
   const [showoptpForm, setshowoptpForm] = useState(false)
   const checkOtp = "7979"
   const OtpSubmit = (otp:string)=>{
    if(otp===checkOtp){
        console.log("login Successful with otp",otp)
    }
    }
    const handleNumber = ((e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()  
        console.log(number);
        
        // phone no. validation
        const regex = /[^0-9]/g 
        if(number.length!==10 || regex.test(number) ){
            alert("invalid Phone no.")
            return 
        }

        //call BE API
        //show otp form
        setshowoptpForm(true)
        
    })


    return ( 
    <div>
        {!showoptpForm?<form onSubmit={handleNumber} className="py-3">
        <input className="border rounded border-black" type="text" placeholder="Enter Phone Number" onChange={(e)=>setNumber(e.target.value)} maxLength={10} />
        <div className="py-3">
        <button className="bg-gray-400 p-1 rounded-md">Login</button>
        </div>
        
        </form>:<div className="font-semi-bold pt-5">
             <p>OTP send to {number}</p>

             <OtpInput length={4} OtpSubmit={(otp:string)=>OtpSubmit(otp)} />
            </div>
        }
    </div> 
    );
}
 
export default PhoneOtpForm;
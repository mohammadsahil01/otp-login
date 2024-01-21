
 
 interface HandleChangeProps {
    index: number;
    e: React.ChangeEvent<HTMLInputElement>;
    otp: string[];
    setOtp: React.Dispatch<React.SetStateAction<string[]>>;
    inputRef:React.MutableRefObject<HTMLInputElement[]>
    OtpSubmit: (otp: string) => void;
  }


export const handleChange = ({index,e,otp,setOtp,inputRef,OtpSubmit}:HandleChangeProps ) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp)
    const combinedOtp = newOtp.join("")
    console.log(combinedOtp);

    if(combinedOtp.length===length){
        OtpSubmit(combinedOtp)
    }

    if(index+1<4 && e.target.value!==""){
        inputRef.current[index + 1].focus();
    }
};
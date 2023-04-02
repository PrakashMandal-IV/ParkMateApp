import { useNavigate } from "react-router-dom"
import { NoAuthPost } from "../components/Api";
import { useState } from "react";

const Login=(props)=>{
   
    const nav = useNavigate()
    const [Error, SetError] = useState('')
    const [Loading, SetIsLoading] = useState(false)

    
const OnLogin=(e)=>{
    e.preventDefault()
    SetError('')
    var det = {
        "link": "User/Login?Email="+e.target[0].value+"&Password="+e.target[1].value
    }
    NoAuthPost(det, (res, rej) => {
        if(res.data.length!==0){
              
        }else{
            SetError('User Not Found !!')
        }
       
    }, (err) => {
        //error
        SetError("Network Error! Please try again")
        SetIsLoading(false)
    });
}
    return(<>
         <div className="w-full flex h-full justify-center align-middle">
            
                 <div className="md:w-1/5 rounded border mt-36 p-5">
                      <form onSubmit={OnLogin} className="flex flex-col gap-12 ">
                            <p className="text-center text-2xl">Login</p>
                            <div className="flex flex-col w-full gap-5">
                                <input type="email" name="LoginEmail" className="border mx-auto w-4/5 px-2 py-3 outline-none rounded-md" placeholder="Email" required/>
                                <input type="password" name="LoginPassword" className="border mx-auto w-4/5 px-2 py-3 outline-none rounded-md" placeholder="Password" required />
                            </div>
                            <div className="flex flex-col w-full gap-4 pb-5">
                                <button type="submit" className="border py-4 mx-10 rounded hover:bg-gray-100 transition-all">
                                   Login
                                </button>
                                <p className="text-center text-red-500">{Error}</p>
                                <div className="border-t pt-4">
                                <p className="text-center">Create a free account <span className="text-blue-400 hover:text-blue-500 transition-all cursor-pointer">Register</span></p>
                            </div>
                            </div>
                            
                      </form>
                 </div>
             
         </div>
    </>)
}

export default Login
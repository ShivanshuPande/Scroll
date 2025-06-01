import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import type { SignInInput } from "@fable07/medium-common"
import axios from "axios"


interface AuthProps { 
    type : "signin" | "signup"
}


export const Auth = ({type} : AuthProps)=>{

    const navigate = useNavigate()

    const [userInputs , setuserInputs ] = useState<SignInInput>({
        email : "" ,
        password : ""
    })
    //need to make post to the backend that connects and register the details of the User
    }
    return(<>
        {/* <pre>{JSON.stringify(userInputs, null ,2 )}</pre> */}   
        <div className="flex justify-center flex-col">
            <div className="font-outfit pt-10">
                <div className="flex justify-center  text-4xl">
                    {type === "signup" ? "Create an Account" : "Welcome Back"}
                </div>
                <div className=" flex justify-center flex-row">
                    <div className="flex justify-center text-base ">
                        {type === "signup" ? "Already a User?" : "Register User"}
                    </div>
                    <div className="underline text-base pl-2">
                        {type=== "signup" ? <Link to={"/signin"}>Log In.</Link> : <Link to={"/signup"}>Sign Up</Link> }
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="pb-30"> 
                <InputBox value={userInputs.email}
                    type="text"
                    label="Email"
                    placeholder="Please Enter the email" 
                    onChange={(e)=>{setuserInputs({...userInputs , email : e.target.value})}}/>
                <br></br>
                <InputBox value={userInputs.password}
                    type="password"
                    label="Password"
                    placeholder="Please Enter the Password"
                    onChange={(e)=>{setuserInputs({...userInputs , password : e.target.value})}}/>

                <div className="pt-8 flex justify-center">
                    {type === "signup" ? <Button Label="Log In" onClick={InputHandler}/> : <Button Label="Sign Up" onClick={InputHandler}/>}
                </div>
            </div>
        </div>
        </>
    )
}

interface ButtonTypes {
    Label : string
    onClick : ()=> void
}

function Button({Label , onClick} : ButtonTypes) {

    return(
        <button onClick={onClick} type="button" className="text-white bg-black cursor-pointer
        font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 active:bg-gray-800
        ">{Label}</button>
        
    )

}

interface InputBoxType {
    label :string , 
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) =>void
    type : "text" | "password"
    value : string
}

function InputBox({label , placeholder , onChange , type , value} :  InputBoxType){
    return  <div>
                <label  className="font-outfit block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input 
                value={value}
                onChange={onChange}
                type={type}
                className="cursor-text font-outfit bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg
                block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400"
                placeholder={placeholder}
                required />
            </div>
}



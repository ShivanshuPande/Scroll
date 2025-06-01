import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { SignInInput } from "@fable07/medium-common"
import axios from "axios"
import { DATABASE_URL } from "../config"

interface AuthProps { 
    type : "signin" | "signup"
}


interface InputBoxType {
    label :string , 
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) =>void
    type : "text" | "password"
    value : string
    error: boolean
}


interface ButtonTypes {
    Label : string
    onClick : ()=> void
    loading : boolean
}

function Button({Label , onClick ,loading} : ButtonTypes) {

    return(
        <button onClick={onClick}
        type="button"
        className="text-white font-outfit bg-black cursor-pointer
        font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 active:bg-gray-800"
        disabled={loading}
        >{loading ? ( <div role="status">
            <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
                <span className="sr-only">Loading...</span>
            </div>) : (Label) }
        </button>
        
    )

}

function InputBox({label , placeholder , onChange , type , error , value} :  InputBoxType){
    return  <div>
                <label  className="font-outfit block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input 
                value={value}
                onChange={onChange}
                type={type}
                className={`cursor-text font-outfit bg-gray-50 border-2 text-gray-900 text-sm
                rounded-lg block w-full p-2.5 dark:bg-white ${error ?"border-red-600 ": "border-black"} dark:placeholder-gray-400`}
                placeholder={placeholder}
                required />
            </div>
}






export const Auth = ({type} : AuthProps)=>{

    
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const [error ,setError] =useState(false)
    const [userInputs , setuserInputs ] = useState<SignInInput>({
        email : "" ,
        password : ""
    })




    const  InputHandler = async () =>{
        
        setLoading(true);
        try {
        const value = await axios.post(`${DATABASE_URL}/api/v1/user/${type === "signup" ? "signup" :'signin'}`  , userInputs)
        
        const token = value.data.jwt ;

        localStorage.setItem('jwtToken' , token)

        navigate(type === "signup" ? "/signin" : "/blog")

        } catch(e) {
            setError(true)
            
        } finally{
            setuserInputs({
            email:"" ,
            password : ""
            }) 
            setLoading(false)
        }
        
        
        
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
                        {type === "signup" ? "Already a User?" : "New User?"}
                    </div>
                    <div className="underline text-base pl-2">
                        {type=== "signup" ? <Link to={"/signin"}>Log In.</Link> : <Link to={"/signup"}>Sign Up</Link> }
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="pb-30"> 
                <InputBox 
                    error={error}
                    value={userInputs.email}
                    type="text"
                    label="Email"
                    placeholder="Please Enter the email" 
                    onChange={(e)=>{setuserInputs({...userInputs , email : e.target.value})
                    setError(false)}}/>
                <br></br>
                <InputBox value={userInputs.password}
                    type="password"
                    label="Password"
                    placeholder="Please Enter the Password"
                    error={error}
                    onChange={(e)=>{setuserInputs({...userInputs , password : e.target.value})
                    setError(false)}}/>

                <div className="pt-8 flex justify-center">
                    {type === "signup" ? <Button loading={loading} Label="Sign Up" onClick={InputHandler}/> : <Button loading={loading} Label="Log In" onClick={InputHandler}/>}
                </div>
            </div>
        </div>
        </>
    )
}


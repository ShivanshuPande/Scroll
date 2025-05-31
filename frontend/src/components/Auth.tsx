import { useState } from "react"
import { Link } from "react-router-dom"


export const Auth = ()=>{


    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    return(
        
        <div className="flex justify-center flex-col">
            <div className="font-outfit pt-10">
                <div className="text-4xl">
                    Create  a Account
                </div>
                <div className="flex flex-row">
                    <div className="pl-14 text-base ">
                    Already a User? 
                    </div>
                    <div className="underline text-base pl-2">
                    <Link to={"/signin"}>Log In.</Link>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="pb-30"> 
                <InputBox label="Email" placeholder="Please Enter the email " onChange={(e)=>{setEmail(e.target.value)}}/>
                <br></br>
                <InputBox label="Password" placeholder="Please Enter the Password " onChange={(e)=>{setPassword(e.target.value)}}/>

                <div className="pt-8 flex justify-center">
                    <Button Label="Log In" onClick={InputHandler}/>
                </div>
            </div>
        </div>
    )
}

interface ButtonTypes {
    Label : string
    onClick : ()=> void
}

function Button({Label , onClick} : ButtonTypes) {

    return(
            <button onClick={onClick} type="button" className="text-white bg-black 
           font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2
           ">{Label}</button>
        
    )

}

interface InputBoxType {
    label :string , 
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) =>void
}

function InputBox({label , placeholder , onChange} :  InputBoxType){
    return  <div>
                <label  className="font-outfit block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input onChange={onChange} type="text"  className="font-outfit bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
}

function InputHandler() {

    console.log()
    //need to make post to the backend that connects and register the details of the User


}


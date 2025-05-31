import { Link } from "react-router-dom"

export const Auth = ()=>{
    return(
        
        <div className="flex justify-center flex-col">
            <div className="font-outfit">
                <div className="text-4xl">
                    Create  a Account
                </div>
                <div className="flex flex-row">
                    <div className="pl-14 text-base ">
                    Already a User ? 
                    </div>
                    <div className="underline text-base ">
                    <Link to={"/signin"}>Log In.</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

interface InputBoxType {
    label :string , 
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) =>void
}

function InputBox({label , placeholder , onChange} :  InputBoxType){
    return  <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
}

function InputHandler {
    
}


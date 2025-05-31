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
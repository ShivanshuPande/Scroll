import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full h-full  border ">
        <div className="bg-stone-170  flex items-center justify-center">
            <Auth type="signup" />
        </div>
        <div className="flex items-center justify-center">
          <Quote />
        </div>
      </div>
    </div>
  );
};
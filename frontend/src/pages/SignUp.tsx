import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-lg overflow-hidden border ">
        <div className="bg-stone-170 h-full flex items-center justify-center">
            <Auth/>
        </div>
        <div className="flex items-center justify-center">
          <Quote />
        </div>
      </div>
    </div>
  );
};
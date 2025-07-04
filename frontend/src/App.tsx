import { BrowserRouter, Routes , Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/blog" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
import { signInInput, signUpInput } from "@fable07/medium-common";

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL :string , 
        JWT_SECRET : string
    }
    
}>()
userRouter.get("/ping", async (c) => {
  try {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    });
    const users = await prisma.user.findMany({ take: 1 });
    return c.json({ status: "OK", users });
  } catch (e) {
    console.error("Ping error:", e);
    return c.json({ error: "DB connection failed", message: String(e) });
  }
});



userRouter.post('/signup' ,async (c) =>{

  const prisma = new PrismaClient();

  try{
  const body = await c.req.json();  

  const {success} = signUpInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      error :"invalid schema"
    })
  }
  const user = await prisma.user.create({
    data:{
        userName: body.email ,
        password : body.password 
    }
  })
  
  const token = await sign({id : user.id}  , c.env.JWT_SECRET)

  

  return c.json({
    token : token 
  }) }catch(e){
    console.log("Signup error:", e);
    c.status(400)
    return c.json({
      error : "Something went wrong"
    })
  }

})

userRouter.post('/signin' , async  (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    });


  try {
    const payload = await c.req.json();

    const {success} = signInInput.safeParse(payload)

    if (!success){
      c.status(400)
      return c.json({
        error : "Invalid Inputs"
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        userName : payload.email , 
        password : payload.password
      }
    })

    if(!user){
      c.status(401)
      return c.json({
        error : "Unauthorizes access"
      })
    }

    const token = await sign({id : user.id} , c.env.JWT_SECRET)

    return c.json({
      token : token
    })

  }catch(e){
    return c.json({
      error : "Error Signing In!"
    })
  }
  
                                                                                                  
})
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL :string , 
        JWT_SECRET : string
    }
    
}>()


userRouter.post('/signup' ,async (c) =>{

  const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
  const body = await c.req.json();  

  const user = await prisma.user.create({
    data:{
        userName: body.email ,
        password : body.password 
    }
  })
  
  const token = await sign({id : user.id}  , c.env.JWT_SECRET)

  

  return c.json({
    jwt : token 
  }) }catch(e){
    return c.json({
      error : "Something went wrong"
    })
  }

})

userRouter.post('/signin' , async  (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl :c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const payload = await c.req.json();

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
    jwt : token
  })

                                                                                                  
})
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode , sign , verify } from 'hono/jwt'



const app = new Hono<{
  Bindings : {
    DATABASE_URL : string ,
    JWT_SECRET : string
  }
}>()

app.post('/api/v1/signup' ,async (c) =>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();  

    const user = await prisma.user.create({
      data:{
          userName: body.email ,
          password : body.password 
      }
    })
    const token = sign({id : user.id}  , c.env.JWT_SECRET)

  

  return c.json({
    jwt : token 
  })

})

app.post('/api/v1/signin' , (c)=>{
  return c.text("signIn Route")
})

app.post('/api/v1/blog' , (c) => {
  return c.text("")
})

app.put('/api/v1/blog' ,(c) =>{

})

app.get('/api/v1/blog/:id' , (c)=>{

})

export default app

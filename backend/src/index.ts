import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup' ,(c) =>{
  return c.text("signUp Route")

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

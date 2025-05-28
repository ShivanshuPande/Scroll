import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text("basic")
})


app.post('/api/v1/signup' ,(c) =>{
  return c.text("signUp Route")

})

app.post('/api/v1/signin' , (c)=>{
  return c.text("signIn Route")
})

app.post('/api/v1/blog' , (c) => {

})

app.put('/api/v1/blog/:id' ,(c) =>{

})

app.get('/api/v1/blog' , (c)=>{

})

export default app

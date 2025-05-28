import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text("basic")
})


app.post('/api/v1/signup' ,(c) =>{

})

app.post('/api/v1/signin' , (c)=>{

})

app.post('/api/v1/blog' , (c) => {

})

app.put('/api/v1/blog' ,(c) =>{

})

app.get('/api/v1/blog' , (c)=>{
  
})

export default app

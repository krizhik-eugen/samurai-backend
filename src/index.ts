import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  const msg = 'Hello World!'
  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
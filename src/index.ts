import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

const hoge = app.get('/hoge', (c) => {
  return c.text('Hello Hono!')
})

const fuga = app.get('/fuga', (c) => {
  return c.text('Hello Hono!')
})

const piyo = app.get('/piyo', (c) => {
  return c.text('Hello Hono!')
})

const hello = app.get('/hello', (c) => {
  return c.text('Hello Hono!')
})

const hi = app.get('/hi', (c) => {
  return c.text('Hello Hono!')
})

const bye = app.get('/bye', (c) => {
  return c.text('Hello Hono!')
})

const good = app.get('/good', (c) => {
  return c.text('Hello Hono!')
})

export type AppType = typeof hoge & typeof fuga & typeof piyo & typeof hello & typeof hi & typeof bye & typeof good

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

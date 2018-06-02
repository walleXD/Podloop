import { https } from "firebase-functions"
import next from "next"
import createApp from "express"

const server = createApp()
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf: { distDir: "next", dir: "../client" } })
const handle = app.getRequestHandler()

server.get("*", async (request, response) => {
  console.log("File: " + request.originalUrl)
  console.log("dev:", dev)
  // log the page.js file or resource being requested

  await app.prepare()

  return handle(request, response)
})

const nextApp = https.onRequest(server)

export { nextApp }

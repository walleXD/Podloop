import { https } from "firebase-functions"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf: { distDir: "next", dir: "./client.js" } })
const handle = app.getRequestHandler()

const nextApp = https.onRequest(async (request, response) => {
  console.log("File: " + request.originalUrl)
  console.log("dev:", dev)
  // log the page.js file or resource being requested

  await app.prepare()

  return handle(request, response)
})

export { nextApp }

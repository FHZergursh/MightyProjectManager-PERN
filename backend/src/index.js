import express from "express"
import { setupDB } from "./db/db.js"
import userRoutes from "./routes/userRoutes.js"

const PORT = 3000
const app = express()

app.use("/api/users", userRoutes)

setupDB().then(app.listen(PORT, () => {
  console.log("Server is running!")
}))
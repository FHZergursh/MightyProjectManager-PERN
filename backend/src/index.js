import express from "express"
import { setupDB } from "./db/db.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"

const PORT = 3000
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

setupDB().then(app.listen(PORT, () => {
  console.log("Server is running!")
}))
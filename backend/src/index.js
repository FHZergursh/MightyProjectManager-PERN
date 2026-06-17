import express from "express"
import { setupDB } from "./db/db.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
import projectRoutes from "./routes/projectRoutes.js"

const PORT = 3000
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/projects", projectRoutes)


setupDB().then(app.listen(PORT, () => {
  console.log("Server is running!")
}))
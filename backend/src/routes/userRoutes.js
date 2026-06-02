import express from "express"
import { GetAllUsers } from "../db/controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/", GetAllUsers)


export default userRoutes
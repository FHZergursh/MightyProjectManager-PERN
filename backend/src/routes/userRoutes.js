import express from "express"
import { createNewUser, deleteUser, GetAllUsers, getUser, updateUser, userLogin } from "../db/controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/", GetAllUsers)
userRoutes.get("/login", userLogin)
userRoutes.get("/:id", getUser)
userRoutes.post("/", createNewUser)
userRoutes.delete("/:id", deleteUser)
userRoutes.put("/:id", updateUser)

export default userRoutes


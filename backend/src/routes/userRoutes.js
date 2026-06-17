import express from "express"
import { checkIfUsernameAvailable, createNewUser, deleteUser, GetAllUsers, getUser, updateUser, userLogin } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/", GetAllUsers)
userRoutes.post("/login", userLogin)
userRoutes.post("/checkusername", checkIfUsernameAvailable)
userRoutes.get("/:id", getUser)
userRoutes.post("/", createNewUser)
userRoutes.delete("/:id", deleteUser)
userRoutes.put("/:id", updateUser)

export default userRoutes


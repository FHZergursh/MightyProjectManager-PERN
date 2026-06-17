import express from "express"
import { createProject, deleteProject, getAllProjects, getProject, updateProject } from "../controllers/projectControllers.js";

const projectRoutes = express.Router();

projectRoutes.get("/", getAllProjects)
projectRoutes.get("/:id", getProject)
projectRoutes.post("/", createProject)
projectRoutes.delete("/:id", deleteProject)
projectRoutes.put("/:id", updateProject)


export default projectRoutes


import { sql } from "../db/db.js";

export const getAllProjects = async (req, res) => {
  try {
    const users = await sql.query(`SELECT * FROM projects`)

    return res.status(200).json({success: true, message: users})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const getProject = async (req, res) => {
  try {
    const {id} = req.params

    const users = await sql.query(`SELECT * FROM projects WHERE id = $1 `, [id])

    return res.status(200).json({success: true, message: users})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const createProject = async (req, res) => {
  try {
    return res.status(200).json("Endpoint successful")

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const deleteProject = async (req, res) => {
  try {
    return res.status(200).json("Endpoint successful")

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const updateProject = async (req, res) => {
  try {
    return res.status(200).json("Endpoint successful")

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}
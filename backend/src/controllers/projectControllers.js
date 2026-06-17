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
    const {projectid} = req.params

    const users = await sql.query(`SELECT * FROM projects WHERE id = $1 `, [projectid])

    return res.status(200).json({success: true, message: users})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const createProject = async (req, res) => {
  try {
    const {projectName, taskAmount, assignedTo} = req.body

    if (!projectName)
    {
      return res.status(400).json("Missing name")
    }
  
    if (!taskAmount)
    {
      const tasks = 0
    }
    else 
    {
      const tasks = taskAmount //set to a new variable to avoid potential null to int errors
    }
    const created = await sql.query(`INSERT INTO projects (projectName, taskAmount, assignedTo) VALUES ($1, $2, $3)`, [projectName, taskAmount, assignedTo])
    return res.status(200).json({success: true, data: created})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const deleteProject = async (req, res) => {
  try {
    const {projectid} = req.params

    if (!projectid)
    {
      return res.status(400).json({success: false, message: "ID not found."})
    }

    const deleted = await sql.query(`DELETE FROM projects WHERE projectid = $1`, [projectid])

    return res.status(200).json({success: true, message: deleted})


  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const updateProject = async (req, res) => {
  try {
    const {projectid} = req.params
    const {projectName, taskAmount, assignedTo} = req.body

    if (!projectid) 
    {
      return res.status(400).json({success: false, message: "ID not found."})
    }

    if (!projectName)
    {
      return res.status(400).json("Missing name")
    }
    else 
    {
      if (!taskAmount)
      {
        const tasks = 0
      }
      else 
      {
        const tasks = taskAmount
      }

      const updated = await sql.query(`UPDATE projects SET projectName = $1, taskAmount = $2, assignedTo = $3 WHERE projectId = $4`, [projectName, taskAmount, assignedTo, projectid])

      return res.status(200).json({success: true, message: updated})
      
      

    }

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}
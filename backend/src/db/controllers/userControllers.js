import { sql } from "../db.js"

export const GetAllUsers = async (req, res) => {
  return res.status(200).json({message: "API endpoint working"})

}

export const getUser = async (req, res) => {
  try {
    const {id} = req.params

    const user = sql.query(`SELECT * FROM users WHERE id = $1`, [id])

    return res.status(200).json({success: true, message: user})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const createNewUser = async (req, res) => {
  try {
    const {username, password, picture} = req.body
    if (!username || !password) {
      return res.status(400).json({success: false, message: "Please provide a valid username and password"})
    }

    const newUser = sql.query(`INSERT INTO users(username, password, picture) 
      VALUES ($1, $2, $3)`, [username, password, picture])

    return res.status(200).json({success: true, message: newUser})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const deleted = sql.query(`DELETE FROM users WHERE id = $1`, [id])
    return res.status(200).json({success: true, message: deleted})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const updateUser = async (req, res) => {
  try { 
    const {id} = req.params
    const {username, password, picture} = req.body

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

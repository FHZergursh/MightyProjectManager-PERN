import { sql } from "../db.js"

export const GetAllUsers = async (req, res) => {
  try {
    const users = await sql.query(`SELECT * FROM users`)

    return res.status(200).json({success: true, message: users})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }

}

export const getUser = async (req, res) => {
  try {
    const {id} = req.params

    const user = await sql.query(`SELECT * FROM users WHERE id = $1`, [id])

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

    //check if username already exists
    const result = await sql.query(`SELECT * FROM users WHERE username = $1`, [username])

    if (result) 
    {
      return res.status(400).json({success: false, message: "Username already taken!"})
    }




    const newUser = await sql.query(`INSERT INTO users (username, password, picture) 
      VALUES ($1, $2, $3)`, [username, password, picture])

    console.log(newUser)

    return res.status(200).json({success: true, message: newUser})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const deleted = await sql.query(`DELETE FROM users WHERE id = $1`, [id])


    return res.status(200).json({success: true, message: deleted.data})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const updateUser = async (req, res) => {
  try { 
    const {id} = req.params
    const {username, password, picture} = req.body

    const updated = await sql.query(`UPDATE users SET username = $1, password = $2, picture = $3 WHERE id = $4`, [username, password, picture, id])

    return res.status(200).json({success: true, message: updated})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }
}

export const userLogin = async (req, res) => {
  try {
    const {username, password} = req.body
    
    if (!username || !password) {
      return res.status(400).json({success: false, message: "Details missing!"})
    }

    const result = await sql.query(`SELECT * FROM users WHERE username = $1 AND password = $2`, [username, password])
    //for now, this works as a quick solution, but JWT will be added later once appropriate

    if (!result) { 
      return res.status(400).json({success: false, message: "Account not found"})

    } else {
      return res.status(200).json({success: true, message: result})
    }

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}
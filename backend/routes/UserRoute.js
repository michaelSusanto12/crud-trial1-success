import express from "express"
import { getUsers, getUsersbyId, saveUser, updateUser, deleteUser } from "../Controllers/UserController.js"
const router = express.Router()



router.get('/users', getUsers)
router.get('/users/:id', getUsersbyId)
router.post('/users', saveUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)



export default router
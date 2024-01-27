import express from 'express'
import { test, updateUser,checkDuplicate } from '../controllers/user.controllers.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/test',test)
router.post('/update/:id',verifyToken,updateUser)
router.post('/check-duplicate/:id', verifyToken, checkDuplicate);
export default router
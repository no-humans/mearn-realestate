import express from 'express'
import { test, updateUser,deleteUser,checkDuplicate} from '../controllers/user.controllers.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/test',test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.post('/check-duplicate/:id', verifyToken, checkDuplicate);
export default router
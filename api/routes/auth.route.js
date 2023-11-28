import express from 'express'
import { siginin, signup } from '../controllers/auth.controller.js'

const router = express.Router()

router.post("/signup",signup) 

router.post("/signin",siginin) 

export default router
import express from 'express'
import { google, siginin, signOut, signup } from '../controllers/auth.controller.js'

const router = express.Router()

router.post("/signup",signup) 

router.post("/signin",siginin) 

router.post('/google',google)

router.get('/signout',signOut)

export default router
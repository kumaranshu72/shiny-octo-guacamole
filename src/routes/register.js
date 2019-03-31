import { Router } from 'express'
import { register } from '../controllers'

const router = Router()

router.route('/register')
  .get(register)

export default router

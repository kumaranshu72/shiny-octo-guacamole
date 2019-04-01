import { Router } from 'express'

import { register } from '../controllers'
import { routeNames } from '../config'

const router = Router()

router.route(routeNames.REGISTER)
  .get(register.viewForm)
  .post(register.registerUser)

export default router

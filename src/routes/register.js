import { Router } from 'express'

const router = Router()

router.route('/register')
  .get((req, res) => res.send('hi'))

export default router

import { viewNames } from '../config'
import { runInNewContext } from 'vm';

export const register = {
  viewForm: (req, res) => {
    res.render(viewNames.REGISTER)
  },
  registerUser: (req, res) => {
    console.log(req.body)
    if (req.body.fname && req.body.lname && req.body.email && req.body.password && req.body.ConfirmPassword) {
      const { fname, lname, email, mobile, password, ConfirmPassword } = req.body
      if (password === ConfirmPassword) {
        res.send('Hi! We are currently developing this feature')
      } else {
        res.send('Password not matched!')
      }
    } else {
      res.send('Fields are missing')
    }
  },
}

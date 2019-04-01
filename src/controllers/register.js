import { viewNames } from '../config'

export const register = {
  viewForm: (req, res) => {
    res.render(viewNames.REGISTER)
  },
  registerUser: (req, res) => {
    const { fname, lname, email, mobile, password, ConfirmPassword } = req.body
    res.send('Hi! We are currently developing this feature')
  },
}

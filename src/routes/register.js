// eslint-disable-next-line arrow-parens
export const Router = (router) => {
  router.route('/register')
    .get((req, res) => {
      res.send('Hello world')
    })
}

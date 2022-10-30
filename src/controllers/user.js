const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth')

class User {

   async login(req, res) {

      const { email, password } = req.body

      if (!email || !password) {
         res.status(401).json(
            {
               success: false,
               message: 'E-mail ou Senha não fornecido'
            }
         )
      }

      try {

         const auth = getAuth()
         const {user} = await signInWithEmailAndPassword(auth, email, password)

         return res.status(200).json(
            {
               success: true,
               message: 'Login sucesso',
               uid: user.uid,
               token: user.accessToken
            }
         )

      } catch (error) {
         return res.status(400).json(
            {
               success: false,
               message: error.code.toString().slice(5) ?? 'Não foi possivel concluir seu cadastro'
            }
         )
      }

   }

   async create(req, res) {

      const { email, password } = req.body

      if (!email || !password) {
         res.status(401).json(
            {
               success: false,
               message: 'E-mail ou Senha não fornecido'
            }
         )
      }

      try {

         const auth = getAuth()
         const {user} = await createUserWithEmailAndPassword(auth, email, password)

         return res.status(200).json(
            {
               success: true,
               message: 'Cadastro sucesso',
               uid: user.uid,
               token: user.accessToken
            }
         )

      } catch (error) {
         return res.status(400).json(
            {
               success: false,
               message: error.code.slice(5) ?? 'Não foi possivel concluir seu cadastro'
            }
         )
      }

   }

}

module.exports = new User()

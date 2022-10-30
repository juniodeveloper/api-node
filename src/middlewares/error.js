module.exports = (error, req, res, next) => {
   if (error) {
      return res.status(500).json(
         {
            sucess: false,
            message: 'Não foi possivel concluir sua solicitação'
         }
      )
   }
   next()
}

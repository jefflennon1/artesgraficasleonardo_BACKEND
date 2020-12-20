const mongoose = require('mongoose');
const CommentModel = mongoose.model('Comments');


module.exports = {
  async  index(req, res){
    const { page } = req.query;
    
    const comments = await CommentModel.paginate({},{ page, limit: 2});
    return res.json(comments);
 },
    async create(req, res){
      const { name, email, comment } = req.body;
      const newComment =  await CommentModel.create( { name, email, comment });
      return res.json(newComment);
},
    async destroy(req, res){
        await CommentModel.findByIdAndDelete(req.params)
        return res.json('Comentário excluido com sucess0!');
 },
    async update(req, res){
      const comment = await CommentModel.findByIdAndUpdate(req.params, req.body, { new: true});
      return res.json(comment);
    }
}
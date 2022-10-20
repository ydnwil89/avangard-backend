const PostModel = require('../models/post-model');

class PostController {

  async createPost(req, res) {
    try {
      const {id, title, text} = req.body
      const post = await PostModel.create({id, title, text})
      res.json(post)
    } catch (e) {
      console.log(e)
    }
  }

  async getPosts(req, res) {
    try {
      const posts = await PostModel.find();
      res.json(posts)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new PostController();
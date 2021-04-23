const axios = require('axios');
const postController = {};

postController.NotFound = async (req, res) => {
    res.status(404).json( { message: "Not Found" } );
};

postController.getAllPosts = async (req, res) => {

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  res.json(data);
};

postController.findPostByID = async (req, res) => {
    const { id } = req.params;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`);
    
    res.json(data);
};

postController.getCommentsByPost = async (req, res) => {
    const { id } = req.params;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }/comments`);
    
    res.json(data);
};


module.exports = postController;
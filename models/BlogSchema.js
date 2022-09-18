const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
   tag:{
        type: String,
        required: true
    },
    blog:{
        type: String,
        required: true
    },
    comments: [
        {
          username: {
            type: String,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
     
},{
    timestamps: true,
  });

  blogSchema.methods.addComment = async function (username, comment) {
    try {
      this.comments = this.comments.concat({ username, comment });
      await this.save();
      return this.comments;
    } catch (error) {
      console.log(error);
    }
  };


//creation of blog model
const Blog = mongoose.model("BLOGS" , blogSchema);

module.exports = Blog;
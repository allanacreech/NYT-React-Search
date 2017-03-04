// Require mongoose
import mongoose from "mongoose";
import Request from "superagent";


// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({
  articleId: {
    type: Number,
    required: true
  },
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  url: {
    type: String,
    required: true
  }, 
  date: {
    type: Date,
    required: true
  }
  
});

ArticleSchema.method({});

ArticleSchema.statics = {
    list(limit) {
        if (!limit) {
            limit = 10; //default to returning only 10 if not otherwise specified
        }
        return this.find()
            .limit(limit)
            .exec();
    }
}
// Create the Article model with the ArticleSchema
//and Export the model
export default mongoose.model("Article", ArticleSchema);




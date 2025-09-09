import mongoose from "mongoose"
const postSchema= new mongoose.Schema({
    author:{
        type:mongoose.Schema.types.ObjectId,
        ref:"User",
        reuired:true
    },
    mediaType:{
        type:String,
        enum:["image","video"],
        required:true
    },
    media:{
        type:String,
        required:true
    },
    caption:{
        type:String
    },
    likes:[
        {
        type:mongoose.Schema.types.ObjectId,
        ref:"User",
        }
    ],
    comments:[{
        type:mongoose.Schema.Types.Object.Id,
        ref:"User",
    }]

},{timeStamp:true})
const Post=mongoose.model("Post",postSchema)
export default Post
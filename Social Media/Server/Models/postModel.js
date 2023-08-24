import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId:{ type:String, required: true},
        desc: String,
        image: String,
        likes:[],
    }, 
    {
        timestamps: true
    }
);

const postModel = mongoose.model("Posts", postSchema);

export default postModel;
const moongose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const TaskSchema = new moongose.Schema(

{
    title:{
        type:String,
        required: true,

    },
    
        isCompleted:{
            type:Boolean,
            default:false,
        },
      }
)

TaskSchema.plugin(timestamp,{
    createdAt : "created_at",
    updatedAt:"updated_at",

})

module.exports = moongose.model("Tasks",TaskSchema)
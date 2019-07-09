const express = require('express');
const router = express.Router();
const Task = require('./Model/Task');

router.get('/',async(req,res)=>{
    try {
        const tasks=  await Task.find({}); 
        res.send(tasks);
        // or   res.json({'task':tasks}); bettaer one
    } catch (error) {
        throw new Error(error);
        
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(task);

        } else {
            res.json({message:"record is no deleted or error  deleting recode"})
        }
    } catch (error) {

        throw error;

        
    }
});

router.post("/",(req,res)=>{
   const tasks = new Task({
    title: `${req.body.title}`,
    isCompleted:`${req.body.isCompleted}`
    
   });
   if (tasks.save()) {
       res.json({message:"task addded successfully"});
       console.log(isCompleted);
   }
   else{
       res.json({message:"erroee savign task"});
   }
});
router.put("/:id",async(req,res)=>{
   try {
       const task = await Task.findOneAndUpdate(req.params.id,{
           title:`${req.body.title}`,
       });
       if (task) {
           res.json({message:"task update ssucdessfully"})
       } else {
           res.json({message:"record not found or errorr e updating the recodrd"})
       }
   } catch (error) {
       res.json({message:error.message});
   }
});
router.delete("/:id",async(req,res)=>{
    try {
        const task = await Task.findOneAndDelete(req.params.id);
        if (task) {
            res.json({message:"record is delete dsuccesfully"});

        } else {
            res.json({message:"record is no deleted or error  deleting recode"})
        }
    } catch (error) {

        throw error;

        
    }
});



// exporting tha module
module.exports = router;
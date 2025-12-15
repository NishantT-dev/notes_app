import Note from "../models/note.js";
export const createNote=async(req,res,next)=>{
    try{
        const note=await Note.create(req.body);
        res.status(201).json(note);
    }
    catch(error){
        next(error);
    }
}
export const getNotes =async(req,res,next)=>{
    try{
        const notes=await Note.find();
        res.json(notes);
    }
    catch(error){
        next(error);
    }
};
export const getNote =async(req,res,next)=>{
   try{
    const note=await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({message:"Note not found"});
    }
    res.json(note);
   }
   catch(error){
    next(error);
   }
};
export const updateNote=async(req,res,next)=>{
    try{
        const note=await Note.findByIdAndUpdate(
            req.params.id,req.body, {new:true}
        );
        res.json(note);
    } catch(error){
        next(error);
    }
};
export const deleteNote=async(req,res,next)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.json({message:"Note Deleted"});
    }
    catch(error){
        next(error);
    }
};

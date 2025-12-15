import express from "express";
import morgan from "morgan";
import notesRoutes from "./routes/notes.js";
import errorHandler from "./middlewares/errorHandler.js";
const app=express();
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/notes",notesRoutes);
app.get("/health",(req,res)=>{
    res.json({status:"OKAY"});
});
app.use(errorHandler);
export default app;
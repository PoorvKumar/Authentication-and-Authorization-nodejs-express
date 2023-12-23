require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const authRouter=require("./routes/authRoutes");
const userRouter=require("./routes/userRoutes");
const { authenticateToken } = require("./middlewares/authMiddleware");
const corsOptions=require("./config/corsOptions");
const app=express();


//Database Connection
mongoose.connect(process.env.MONGO_URI,{
    dbName: process.env.MONGO_DB_NAME,
})
.then(()=>
{
    console.log("MongoDB connection establised");
})
.catch((error)=>
{
    console.error("Error connecting to MongoDB:",error);
});

//Middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/',(req,res)=>
{
    res.json({ message: "API Running"});
});

app.use("/api/users",authenticateToken,userRouter);
app.use("/api/auth",authRouter);

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>
{
    console.log(`Server listening on PORT: ${PORT}`);
})
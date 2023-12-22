const express=require("express");
const { getAllUsers } = require("../controllers/userController");
const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const router=express.Router();

router.get("/",authorizeRoles(["admin"]),getAllUsers);

module.exports=router;
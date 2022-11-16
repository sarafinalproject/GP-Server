const express = require("express");
const usersBL=require("../Models/usersBL");
const router=express.Router();

router.route('/')
.get(async function(req,resp){
    let data=await usersBL.getallUsers();
    return resp.json(data);
})

router.route("/:id")
.get(async function(req,resp)
{
    let id=req.params.id;
    let data=await usersBL.getUsersByID(id)
    return resp.json(data);
}
)
router.route("/")
.post(async function(req,resp)
{
    let body=req.body;
    //console.log(body);
    console.log(req.body);
    let data=await usersBL.createUser(body);
    return resp.json(data);
})

router.route("/:id")
.put(async function(req,resp){
    let id=req.params.id;
    let body=req.body;
    let data=await usersBL.updateUser(id,body);
    return resp.json(data);
}
)
router.route("/:id")
.delete(async function(req,resp){
    let id=req.params.id;
    let data=await usersBL.deleteUsers(id);
    return resp.json(data);
})
module.exports=router;
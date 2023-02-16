const express = require("express");
const usersBL=require("../Models/usersBL");
const router=express.Router();
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(authHeader, accessTokenSecret, (err, user) => {
            if (err) {
                console.log(err)
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

router.route('/')
.get(authenticateJWT,async function(req,resp){
    let data=await usersBL.getallUsers();
    return resp.json(data);
})

router.route("/:id")
.get(authenticateJWT,async function(req,resp)
{
    let id=req.params.id;
    let data=await usersBL.getUsersByID(id)
    return resp.json(data);
}
)
router.route('/register')
.post(function(req,resp){
    let obj=req.body;
   usersBL.createUser(obj).then(data=>{return resp.json(data)}).catch(err => resp.status(400).send(err));


})
router.route("/")
.post( authenticateJWT,async function(req,resp)
{
    let body=req.body;
    //console.log(body);
    console.log(req.body);
    let data=await usersBL.createUser(body);
    return resp.json(data);
})

router.route("/:id")
.put(authenticateJWT,async function(req,resp){
    let id=req.params.id;
    let body=req.body;
    let data=await usersBL.updateUser(id,body);
    return resp.json(data);
}
)
router.route("/:id")
.delete(authenticateJWT,async function(req,resp){
    let id=req.params.id;
    let data=await usersBL.deleteUsers(id);
    return resp.json(data);
})
router.route('/login')
.post(function(req,resp){
    const { email, password } = req.body;
    usersBL.login(email, password).then(data=>{return resp.json(data)}).catch(err => resp.status(400).send(err));

})
module.exports=router;
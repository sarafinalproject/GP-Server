
const userModel = require("./userModel");
const jwt = require('jsonwebtoken');

exports.getallUsers=function()
{
   
    return new Promise((resolve,reject)=>
        {
            userModel.find({},function(err,data)
            {
                if(err)
                 {reject(err)}
                 else{
                    console.log(data);
                    resolve(data);
                 }
            })
        }

    )

}
exports.getUsersByID=function(id)
{
    return new Promise((resolve,reject)=>
        {
            userModel.findById(id,function(err,data)
            {
             if(err)
              {
                 reject(err);
              }
        else{
    
            resolve (data);
            }
            }

    )
})}
/*exports.createUser=function(obj)
{
    return new Promise((resolve,reject)=>
        {
         let user=new userModel(
            {
                name:obj.name
            }
         );
         user.save(function(err)
         {
            if(err)
            {reject(err)}
            else{
                
                resolve("created");
            }
         })   
        }

    )
}*/
function createUser(obj)
{ 

    return new Promise(async(resolve, reject) =>
    {

      const users =await getAllUsers().then(data=>{return data},function(err, data)
      {
          if(err)
          {
              reject(err)
          }
         
      });

        const email = users.find(u => { return u.email ===  obj.email }, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        });
       if (!email)
       {

       let user=new userModel({
            "full_name" : obj.full_name,
            "email" : obj.email,
            "password" : obj.password
            
    
       })
       user.save(function(err)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            resolve("Created !")
        }
    })

}
else
reject("error email exist");
    }) 
   
}


exports.updateUser=function(id,obj)
{
    return new Promise((resolve,reject)=>
        {
            userModel.findByIdAndUpdate(id,
                {
                    name:obj.name
                },function(err)
                {
                if(err)
                {
                    reject(err)
                }
                 else{
                    
                    resolve("update");

                 }
                }

            )
        }

    )
}
exports.deleteUsers=function(id)
{
    return new Promise((resolve,reject)=>
        {
            userModel.findByIdAndDelete(id,function(err,data)
            {
                if(err)
               {
                reject(err)
                }
                else{
                    
                      resolve("delete");
                    
                    }
            })
        }

    )
}
  function login(email, password )
{
    return new Promise(async (resolve, reject) =>
    {

        var users =await getallUsers().then(data=>{return data});
        const accessTokenSecret = 'somerandomaccesstoken';
        const refreshTokenSecret = 'somerandomstringforrefreshtoken';
        let refreshTokens = [];
        // Read email and password from request body
        //const { email, password } = req.body;
    
        // Filter user from the users array by email and password
        const user = users.find(u => { return u.email === email && u.password === password });
  
        if (user) {
            // generate an access token
            const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret, { expiresIn: 7200 });
            const refreshToken = jwt.sign({ email: user.email, role: user.role }, refreshTokenSecret);
    
            refreshTokens.push(refreshToken);
    
            resolve({
                accessToken,
                refreshToken
            });
        } else {
            reject("email or password incorrect");
            return;
      
       
        }
   
    }) 
   
}
module.exports={createUser,login};


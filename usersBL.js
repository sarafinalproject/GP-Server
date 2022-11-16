//const jfile=require("jsonfile");
const userModel = require("./userModel");

exports.getallUsers=function()
{
   
    return new Promise((resolve,reject)=>
        {
            userModel.find({},function(err,data)
            {
                if(err)
                 {reject(err)}
                 else{
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
exports.createUser=function(obj)
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



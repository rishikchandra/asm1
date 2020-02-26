function verifyUser(uname,pwd) {
    return new Promise(function(resolve,reject){
        if(uname=="rishi" && pwd == "rishi123")
        {
            resolve(uname);
        }
        else{
            reject("Error in uname");
        }
    })
}
var myArr=["HR","Admin"];

function getRoles(uname){
    return new Promise(function(resolve,reject){
        if(uname=="rishi")
        {
            resolve(myArr);
        }
        else{
            reject("Error");
        }
    })
}
function checkUserAccess(myArr){
    return new Promise(function(resolve,reject){
    for(i in myArr)
    {
        if(myArr[i]=="HR" || myArr[i]=="Admin"){
            resolve("Success");
        }
        else{

            reject("Invalid");
        }
    }
})
}

function authenticateUser(uname,pwd)
{
    
    verifyUser(uname, pwd).then(function(fromResolve){
        return getRoles(fromResolve);
    }).then(function(fromResolve){
        return checkUserAccess(fromResolve);
    }).then(function(fromResolve){
        console.log(fromResolve);
    }).catch(function(fromReject){
        console.log(fromReject)
    })
}

authenticateUser("rishi","rishi123");

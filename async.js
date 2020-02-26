function verifyUser(uname,pwd) {
    return new Promise(function(resolve,reject){
        if(uname=="rishi" && pwd == "rishi123"){
            resolve(uname);
        }
        else{
            reject("Invalid User");
        }
    })
}
var myArr=["HR","Admin"];

function getRoles(uname){
    return new Promise(function(resolve,reject){
        if(uname=="rishi"){
            resolve(myArr);
        }
        else{
            reject("invalid");
        }
    })
}
function checkUserAccess(myArr){
    return new Promise(function(resolve,reject){
    for(i in myArr)
    {
        if(myArr[i]=="HR"){
            resolve("Success");
        }
        else{
            reject("Invalid");
        }
    }
})
}


async function authenticateUser(uname,pwd){
        try{
            var q=await verifyUser(uname,pwd);
            var r=await getRoles(q);
            var s=await checkUserAccess(r);
            console.log(s);
    }
    catch(exception){
        console.log("exception :",exception);
    }
}
authenticateUser("rishi","rishi123");

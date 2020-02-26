function verifyUser(uname,pwd,callback) {
    if(uname=='rishi' && pwd == 'rishi123')
    {
        callback(uname);      
    } 
}

var myArr=["HR","Admin"];


function getRoles(uname,callback) {
    if(uname=="rishi")
    {
    callback(myArr);    
    }
}


function checkUserAccess(myArr,callback) {
    for(i in myArr)
    {
        if(myArr[i]=="HR" || myArr[i]=="Admin")
        {
        callback("Success");
        }
    
    }
}


function authenticateUser(uname, pwd)
{
    verifyUser(uname,pwd,function(){
        getRoles(uname,function(){
            checkUserAccess(myArr,function(){
                console.log("Success");
             })
         })
     })
}


authenticateUser("rishi","rishi123");
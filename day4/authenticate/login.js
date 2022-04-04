const login = function (user,password) {
    // console.log(user,password);
    if(user==="brix" && password==="brix"){
        return true;
    }
    else{
        return false;
    }

}

module.exports = login
const jwt = require('jsonwebtoken')

const generarJWT = (uid,uname) => {
    
    let token = jwt.sign({ uid,uname }, process.env.TOKENKEYWORD, {
      });
    return token;
}

module.exports ={
    generarJWT
}
const bcrypt = require("bcrypt");
const { use } = require("../routes/auth.route");
const { loginService, generateToken } = require("../services/auth.service");

const login = async(req,res) =>{

    try{const {email,password} = req.body;

    const user = await loginService(email);

    if(!user){
        return res.status(404).send({message: "Usuário ou senha incorretos!"});
    }

    const passwordIsValid = bcrypt.compareSync(password,user.password);

    if(!passwordIsValid){
        return res.status(400).send({message: "Usuário ou senha incorretos!"});
    }
   
    const token = generateToken(user.id);

    res.send({token});
    }catch (err){
        res.status(500).send(err.message);
    }
    
}

module.exports = {login};
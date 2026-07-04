 
const Registration = async (req, res)=>{
    const {name, email, password} = req.body; 
    res.send("aita registration route");
};

module.exports = Registration
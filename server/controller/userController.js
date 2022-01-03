import bcrypt from 'bcrypt';
const SALT_ROUND = 10;

const signup = async (req, res) => {
    const { username,firstname,lastname, email,password, phone } = req.body;

    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
    try {
        const result = await req.context.models.users.create({
            user_name: username,
            user_firstname: firstname,    
            user_lastname: lastname,    
            user_email: email,    
            user_password: hashPassword,
            user_phone : phone
        });
        const { user_name, user_email } = result.dataValues;
        res.send({ user_name, user_email });
    } catch (error) {
        res.status(404).send(error);
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await req.context.models.users.findOne({
            where: { user_email: email }
        });
        const { user_name, user_email, user_password } = result.dataValues;
        const compare = await bcrypt.compare(password, user_password);
        if (compare) {
            return res.send({ user_name, user_email });
        } else {
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.sendStatus(404);
    }
}

const findAll = async (req, res) => {
    try {
        const result = await req.context.models.users.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}

const findOne = async (req,res) => {
    try {
        const result = await req.context.models.users.findOne({
            where:{user_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}



export default {
    findAll,
    findOne,
    signup,
    signin,
}
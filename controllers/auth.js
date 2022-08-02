import User from "../models/user.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const {username, password, rememberPassword} = req.body;
        if (!username || !password) {
            return res.status(400).json({msg: "Please provider all values!"});
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({msg: "Password must be longer than 6 characters!"});
        }

        const user = await User.findOne({username});
        if (!user) {
            return res
                .status(400)
                .json({msg: "Username or password is not defined!"});
        }

        const isMatch =
            username === user.username && password === user.password;

        if (!isMatch) {
            return res
                .status(400)
                .json({msg: "Username or password is not defined!"});
        }

        // @ts-ignore
        const token = jwt.sign({_id: user._id}, process.env.JWT, {
            expiresIn: rememberPassword ? "365d" : process.env.JWT_LIFETIME,
        });
        user.password = undefined;
        return res.status(200).json({token, user});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "LOGIN ERROR. Try again!"});
    }
};
const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({msg: "Please provider all values!"});
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({msg: "Password must be longer than 6 characters!"});
        }

        const user = await User.create({username, password});
        if (!user) {
            return res
                .status(400)
                .json({msg: "Email or password is not defined!"});
        }
        user.password = undefined;
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "LOGIN ERROR. Try again!"});
    }
};

export {login, register};

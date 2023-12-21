const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "food-monkey";

// user signup
const signup = async (req, res, next) => {
    const { full_name ,phone, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email});
    } catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return res
            .status(400)
            .json({ message: "User already exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        full_name,
        phone,
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({ message: user });
};

// user login

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let existingUser;
        try {
            existingUser = await User.findOne({ email: email });
        } catch (err) {
            return new Error(err);
        }
        if (!existingUser) {
            return res
                .status(400)
                .json({ message: "User not found. Signup Please" });
        }
        const isPasswordCorrect = bcrypt.compareSync(
            password,
            existingUser.password,
        );
        if (isPasswordCorrect) {
            const token = jwt.sign(
                { email: existingUser.email, id: existingUser._id },
                JWT_SECRET_KEY,
                {},
            );
            console.log(token);
            res.status(200).cookie("token", token).json({
                id: existingUser._id,
                email: existingUser.email,
                full_name: existingUser.full_name,
                phone: existingUser.phone
            });
        } else {
            res.status(400).json({ message: "Invalid Email / Password" });
        }
    }catch (err) {
        console.log(err);
    }
}

const user = async (req, res,next) => {
    const { token } = req.cookies;
    jwt.verify(token, JWT_SECRET_KEY, {}, (error, info) => {
        if (error) throw error;
        res.json(info);
    });
    // console.log(token);
    // return res.json(token);
}

const logout = async (req, res,next) => {
    res.cookie("token", "").json("ok");
}

exports.signup = signup;
exports.login = login;
exports.user = user;
exports.logout = logout;
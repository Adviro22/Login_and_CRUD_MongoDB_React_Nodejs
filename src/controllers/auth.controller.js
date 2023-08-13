import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { CreateAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TokenSecret } from "../configs.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    const userFound = await User.findOne({email})
    if(userFound) return res.status(400).json(['The email already existe'])

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSave = await newUser.save();
    const token = await CreateAccessToken({ id: userSave._id });
    res.cookie("token", token);

    res.json({
      id: userSave._id,
      username: userSave.username,
      email: userSave.email,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const userFound = await User.findOne({email})

    if(!userFound) return res.status(400).json({message: "User not found"})

    const isMatch = await bcrypt.compare(password, userFound.password);

    if(!isMatch) return res.status(400).json({message: "Incorrect password"})


    const token = await CreateAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) =>{
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "user not found"})

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    })
}

export const verifyToken = async(req, res) =>{
  const {token} = req.cookies

  if(!token) return res.status(401).json({message: "Unauthorizated"});

  jwt.verify(token, TokenSecret, async (err, user) =>{
    if(err) return res.status(401).json({message: "unauthorizated"})

    const userFound= await User.findById(user.id)

    if(!userFound) return res.status(401),json({message: 'Unauthorizated'})

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
    
  });
};
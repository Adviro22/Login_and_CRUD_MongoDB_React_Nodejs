import jwt from "jsonwebtoken";
import { TokenSecret } from "../configs.js";

export const authrequire = (req, res, next) => {
  const {token} = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No Token, Autorization denied" });

    jwt.verify(token, TokenSecret, (err, user) => {
        if(err) return res.status(403).json({message: "Invalid token"});

        req.user = user

        next();
    })
};

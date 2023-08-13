import { TokenSecret } from "../configs.js";
import jwt from "jsonwebtoken";

export function CreateAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TokenSecret, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}

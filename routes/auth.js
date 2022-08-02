import express from "express";
import {getData} from "../controllers/insurance.js";
import {login, register} from "./../controllers/auth.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
    res.json({msg: "Auth"});
});
router.route("/login").post(login);
router.route("/register").post(register);

router.route("/get-data").post(getData);

export default router;

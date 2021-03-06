const { user } = require("../../models");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    // our validation schema here
    const schema = Joi.object({
        fullName: Joi.string().min(5).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
    });

    // do validation and get error object from schema.validate
    const { error } = schema.validate(req.body);

    // if error exist send validation error message
    if (error)
        return res.status(200).send({
            error: {
                message: error.details[0].message,
            },
        });

    try {
        // we generate salt (random value) with 10 rounds
        const salt = await bcrypt.genSalt(10);
        // we hash password from request with salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // code here
        const newUser = await user.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashedPassword,
            role: "customer",
        });


        const dataToken = {
            id: newUser.id
        }

        const SECRRET_KEY = process.env.TOKEN_KEY
        const token = jwt.sign(dataToken, SECRRET_KEY)

        res.status(200).send({
            status: "success...",
            data: {
                email: newUser.email,
                token
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.login = async (req, res) => {
    // our validation schema here
    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
    });

    // do validation and get error object from schema.validate
    const { error } = schema.validate(req.body);

    // if error exist send validation error message
    if (error)
        return res.status(200).send({
            error: {
                message: error.details[0].message,
            },
        });

    try {
        const userExist = await user.findOne({
            where: {
                email: req.body.email,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
        // compare password between entered from client and from database
        const isValid = await bcrypt.compare(req.body.password, userExist.password);

        // check if not valid then return response with status 400 (bad request)
        if (!isValid) {
            return res.status(400).send({
                status: "failed",
                message: "credential is invalid",
            });
        }

        // code here
        const dataToken = {
            id: userExist.id
        }

        const SECRRET_KEY = process.env.TOKEN_KEY
        const token = jwt.sign(dataToken, SECRRET_KEY)

        res.status(200).send({
            status: "success...",
            data: {
                email: userExist.email,
                role: userExist.role,
                token
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.checkAuth = async (req, res) => {
    try {
        const id = req.user.id;

        const dataUser = await user.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"],
            },
        });

        if (!dataUser) {
            return res.status(404).send({
                status: "failed",
            });
        }

        res.send({
            status: "success...",
            data: {
                user: {
                    id: dataUser.id,
                    name: dataUser.name,
                    email: dataUser.email,
                    status: dataUser.status,
                },
            },
        });
    } catch (error) {
        console.log(error);
        res.status({
            status: "failed",
            message: "Server Error",
        });
    }
};
const emailService = require("../service/email.service");

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const sendEmail = async (req, res) => {
    try {
        if (
            req.body.email == null ||
            req.body.email == undefined ||
            !validateEmail(req.body.email)
        ) {
            return res.status(400).json({
                messatge: "El email no es válido",
                data: null,
                err: true,
            });
        }
        await emailService.sendMail(
            req.body.email,
            req.body.contentHtml,
            req.body.subject
        );
        return res.status(200).json({
            message: "Se envio correctamente el email",
            data: null,
            err: false,
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Error en el servidor",
            data: null,
            err: true,
        });
    }
};

const sendEmailMassive = async (req, res) => {
    try {
        const { users, contentHtml, subject } = req.body;
        if (users == undefined || users == null) {
            return res.status(400).json({
                message: "El campo (users), no debe estar vacio.",
                data: null,
                err: true,
            });
        }
        emailService.sendEmailMassive(users, contentHtml, subject);
        return res.status(200).json({
            message: "Los correos se enviaron correctamente",
            data: null,
            err: false,
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Error en el servidor",
            data: null,
            err: true,
        });
    }
};
module.exports = {
    sendEmail,
    sendEmailMassive,
};

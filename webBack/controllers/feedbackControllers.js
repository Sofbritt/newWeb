const sendFeedBack = async (req, res) => {
    try {
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: 'sofi.harutyunyan23@gmail.com',
                pass: 'password'
            }
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <' + req.body.email + '>', // sender address
            to: "info@shop.com", // list of receivers
            subject: "Feedback", // Subject line
            text: req.body.message, // plain text body
        });
        res.status(200).json(info.messageId);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}





module.exports = {
    sendFeedBack
};
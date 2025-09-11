import nodeMailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodeMailer.createTransport({
  host: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});
const sendMail=async(to,otp)=>{
    transporter.sendMail({
    from:process.env.EMAIL,
    to,
    subject:"Reset Your Password",
    html:`<p>Your OTP for password reset reset is <b>${otp}</b>It expires in 5 minutes.</p>`
})
}
export default sendMail;
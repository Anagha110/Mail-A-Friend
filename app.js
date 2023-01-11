
const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"anaghaanuraj1990@gmail.com",
        pass:"lbisnqtskrmwpfah"
    },
   // port:465,
   // host:"smtp.gmail.com"
})
const msg={
    from:"anagha110vkm@gmail.com",
    to:"anusmooth@gmail.com",
    subject:"nodemailer testing",
    text:"Hi..have a good day"
}
transporter.sendMail(msg,(err)=>{
    if(err){
        return console.log("Error occurs",err);
    }
    else{
        return console.log("email sent");
    }
})
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const  transporter = nodemailer.createTransport({
	service:'gmail',
	auth: {
		user: "new email@gmail.com",
		pass: "new pass",
	}
})

export async function POST(req:NextRequest){
    const body = await req.json();
    console.log(body);
    const mailOptions = {
        from: "newemail@gmail.com",
        to: "recievers@gmail.com",
        subject: "New message",
        html: `<h4>Name: ${body.name}</h4><h4>Email: ${body.email}</h4><h4>Message: ${body.message}</h4>`,
      };
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            status: false,
            msg: "Wrong email or password",
        });
      } catch (error) {
       console.log(error);
      }


}
import { bootstrap, runMigrations } from "@vendure/core";
import { config } from "./vendure-config";
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

router.post("/contact", (req: any, res: any) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: name,
		to: "rjmk159@gmail.com",
		subject: "Contact Form Submission",
		html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
	};
	const contactEmail = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "rjmk159@gmail.com",
			pass: "Junaid@123*",
		},
	});

	contactEmail.verify((error: any) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Ready to Send");
		}
	});
	contactEmail.sendMail(mail, (error: any) => {
		if (error) {
			res.json({ status: "ERROR" });
		} else {
			res.json({ status: "Message Sent" });
		}
	});
});

runMigrations(config)
	.then(() => bootstrap(config))
	.catch((err) => {
		console.log(err);
	});

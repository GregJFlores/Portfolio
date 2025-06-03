"use client";
import React, { useState } from "react";
import TypedText from "./TypedText";
import * as motion from "motion/react-client";
type Props = {};

const ContactForm = (props: Props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const result = await res.json();
        if (result.success) {
            setStatus("Message sent!");
            setForm({ firstName: "", lastName: "", subject: "", email: "", message: "" });
        } else {
            setStatus("Failed to send. Try again later.");
        }
        setIsSubmitting(false);
    };

    //Prevent form submission if status is not empty
    if (status === "Message sent!") {
        // display a success message along with a message about getting back to the user
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                }}
                className="border-2 border-green-500 p-4 intense-glow-container max-w-2xl mx-auto mt-5 text-center"
            >
                <TypedText text="Thank you for reaching out! I'll get back to you as soon as possible." />
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} method="POST" className="mx-auto max-w-xl mt-5">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="block text-sm/6 font-semibold">
                        First name <span className="text-green-300">*</span>
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            disabled={isSubmitting}
                            value={form.firstName}
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="block w-full disabled:opacity-65 disabled:bg-gray-700 disabled:text-gray-300 bg-gray-800 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-400"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm/6 font-semibold">
                        Last name <span className="text-green-300">*</span>
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={form.lastName}
                            required
                            disabled={isSubmitting}
                            onChange={handleChange}
                            autoComplete="family-name"
                            className="block w-full disabled:opacity-65 disabled:bg-gray-700 disabled:text-gray-300 bg-gray-800 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-400"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm/6 font-semibold">
                        Subject
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            disabled={isSubmitting}
                            value={form.subject}
                            onChange={handleChange}
                            autoComplete="subject"
                            className="block w-full disabled:opacity-65 disabled:bg-gray-700 disabled:text-gray-300 bg-gray-800 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-400"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold">
                        Email <span className="text-green-300">*</span>
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="block w-full disabled:opacity-65 disabled:bg-gray-700 disabled:text-gray-300 bg-gray-800 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-400"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold">
                        Message <span className="text-green-300">*</span>
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            disabled={isSubmitting}
                            value={form.message}
                            onChange={handleChange}
                            className="block w-full disabled:opacity-65 bg-gray-800 disabled:bg-gray-700 disabled:text-gray-300 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-green-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-400"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full disabled:opacity-65  disabled:bg-green-700 disabled:text-gray-200  bg-green-600/75 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-500/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                    Let's talk
                </button>
                {status && <TypedText key={status} className="text-center mt-3" text={status} />}
            </div>
        </form>
    );
};

export default ContactForm;

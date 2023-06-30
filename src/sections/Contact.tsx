import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Find Me <span className="text-underline">Cool?</span></h2>
      <p className="contact-text">
      Thank you for visiting my personal website! If you have any questions, inquiries, or would like to collaborate on a project, or any Hiring manager who has finds me fit for the role.
      </p>
      <div className="contact-cta">
        <Button link="mailto:abhinav.kumar2712@gmail.com" text="Hit me up :)" />
      </div>
    </motion.div>
  );
}

export default Contact;

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { resumeData } from "../data/resume";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 pt-8">
                        <a
                            href={`mailto:${resumeData.email}`}
                            className="flex flex-col items-center justify-center p-6 border bg-card rounded-xl hover:shadow-lg transition-all group"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground mt-1">{resumeData.email}</p>
                        </a>

                        <div className="flex flex-col items-center justify-center p-6 border bg-card rounded-xl">
                            <h3 className="font-semibold mb-4">Connect on Social</h3>
                            <div className="flex gap-4">
                                <a
                                    href={resumeData.social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-10 w-10 border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={resumeData.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-10 w-10 border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

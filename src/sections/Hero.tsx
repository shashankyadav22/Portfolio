import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { resumeData } from "../data/resume";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-30" />

            <div className="container px-4 md:px-6 z-10">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-zinc-400 text-sm mb-4"
                    >
                        Available for Internships & SDE Roles
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4 max-w-4xl"
                    >
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{resumeData.name}</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-zinc-400 text-lg md:text-xl md:leading-relaxed">
                            <span className="text-zinc-100 font-semibold">{resumeData.role}</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button asChild size="lg" className="px-8 h-12 rounded-full text-base bg-white text-black hover:bg-zinc-200">
                            <a href="#projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-8 h-12 rounded-full text-base border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm">
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-zinc-500 animate-bounce"
            >
                <ChevronDown className="h-6 w-6" />
            </motion.div>
        </section>
    );
};

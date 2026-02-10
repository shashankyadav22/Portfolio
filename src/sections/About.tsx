import { motion } from "framer-motion";
import { resumeData } from "../data/resume";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">About Me</h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                        <p className="text-lg leading-relaxed">
                            {resumeData.summary}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            I am currently pursuing my B.Tech in Computer Science at {resumeData.education[0].institution}, maintaining a CGPA of 8.24.
                            My journey involves a deep dive into Data Structures and Algorithms, having solved over 300 problems, which has honed my problem-solving skills.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Beyond algorithms, I am passionate about building tangible products. My expertise lies in full-stack development, leveraging the power of modern frameworks like Next.js and React to create seamless user experiences. I enjoy the challenge of optimizing database performance and ensuring secure application architecture.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

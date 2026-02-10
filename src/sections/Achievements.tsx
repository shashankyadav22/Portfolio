import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Award } from "lucide-react";

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <div className="container px-4 md:px-6 space-y-20">
                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 text-center">Achievements</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Coding Stats */}
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Award className="h-8 w-8 text-primary" />
                                <h3 className="text-xl font-bold">Problem Solving</h3>
                            </div>
                            <p className="text-muted-foreground text-lg">
                                {typeof resumeData.achievements[0] === 'string' ? resumeData.achievements[0] : ''} {/* Solved 300+ problems */}
                            </p>
                        </div>

                        {/* Certification */}
                        {typeof resumeData.achievements[1] === 'object' && (
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Award className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">{resumeData.achievements[1].title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {resumeData.achievements[1].details.map((detail, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

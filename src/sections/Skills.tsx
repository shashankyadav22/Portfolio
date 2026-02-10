import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    { title: "Languages", skills: resumeData.skills.languages, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { title: "Web Technologies", skills: resumeData.skills.webTechnologies, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { title: "Databases", skills: resumeData.skills.databases, color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { title: "Tools & Platforms", skills: resumeData.skills.tools, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[300px] bg-primary/5 -skew-y-6 blur-3xl -z-10" />

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Technical Arsenal</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                        <p className="text-zinc-400">Tools and technologies I use to craft high-performance digital experiences.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                                <h3 className="text-lg font-bold text-zinc-100 mb-6">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className={`text-sm px-3 py-1.5 transition-colors ${category.color} hover:bg-white/10`}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

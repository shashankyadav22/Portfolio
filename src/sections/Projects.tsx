import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { resumeData } from "../data/resume";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            Real-world solutions built with modern technology stacks.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-1">
                        {resumeData.projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div className="space-y-1">
                                                <CardTitle className="text-2xl">{project.title}</CardTitle>
                                                <CardDescription className="text-base">{project.description}</CardDescription>
                                            </div>
                                            <div className="flex gap-2">
                                                {/* Buttons removed as per request */}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-4">
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Key Features & Impact</h4>
                                        <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                                            {project.details.map((detail, i) => (
                                                <li key={i} className="flex items-start text-sm md:text-base">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span className="text-muted-foreground">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="pt-0">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

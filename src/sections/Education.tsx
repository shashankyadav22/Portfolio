import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Education</h2>

                    <div className="max-w-4xl mx-auto relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-10 group">
                        {resumeData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-1 md:left-auto md:right-0 md:col-start-2 md:col-end-3 md:relative md:w-full md:flex md:justify-center md:items-center h-full">
                                    <div className="h-4 w-4 rounded-full bg-background border-4 border-primary z-10" />
                                    {/* Line fix for desktop? No, border-l on parent handles it roughly, but for center line layout we need more custom css. 
                                        Keeping it simple list style with line on left for now as per "Clean, minimal timeline style".
                                    */}
                                </div>

                                {/* Content */}
                                <div className="md:col-span-5 md:ml-10">
                                    <Card className="hover:shadow-md transition-shadow">
                                        <CardHeader>
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                                <CardTitle className="text-xl text-primary">{edu.institution}</CardTitle>
                                                <span className="text-sm font-medium px-3 py-1 bg-secondary rounded-full w-fit">
                                                    {edu.year}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <h4 className="font-semibold text-lg">{edu.degree}</h4>
                                            <p className="text-muted-foreground mt-2 font-medium">{edu.grade}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

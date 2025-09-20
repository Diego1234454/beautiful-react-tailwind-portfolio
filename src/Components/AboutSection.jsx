import {Code, User, Briefcase} from "lucide-react";

export const AboutSection = () => {
    return (
        <>
            <section id="about" className="py-24 px-4 relative">
                <div className="container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-">
                            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                            <p className="text-muted-foreground">
                               <br/> Texto de Prueba para presentacion <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem doloribus eligendi eveniet incidunt, odit quia quidem rerum sint, totam, vitae voluptatum! Alias expedita ipsa non odit quis! Ipsum, maiores?
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">Get In Touch</a>
                                <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>

                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                     <div className="p-3 rounded-full bg-primary/10">
                                         <Code className="text-primary h-6 w-6"/>
                                     </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                        <p className="text-muted-foreground">Web Development experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="text-primary h-6 w-6"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">UI/UX Design experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="text-primary h-6 w-6"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground">Project Management experience or where talk about projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
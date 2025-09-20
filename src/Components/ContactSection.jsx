import {Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter} from "lucide-react";
import {cn} from "@/lib/utils.js";
import {useState} from "react";



export const ContactSection = () => {

    return (
        <>
            <section id="contact" className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In <span className="text-primary">Touch</span></h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        <p className="font-bold">MENSAJE DE PRESENTACION - REMOVER BOLD Y P TAG</p>
                    </p>
                    <h3 className="text-2xl font-semibold mb-6 pb-8">Contact information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10 ">
                                        <Mail className="text-primary h-6 w-6 " />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email:</h4>
                                        <a href="mailto:medinadiego607@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            medinadiego607@gmail.com </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10 ">
                                        <Phone className="text-primary h-6 w-6 " />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone Number:</h4>
                                        <a href="tel:+528993175207" className="text-muted-foreground hover:text-primary transition-colors">
                                            +52 (899) 317-5207 </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10 ">
                                        <MapPin className="text-primary h-6 w-6 " />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location:</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Reynosa, Tamaulipas, México </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="rounded-lg shadow-xs">
                            <h4 className="font-medium mb-4 pb-2">Connect with me on:</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/diego-allan-véliz-medina-29906427a" title="My LinkedIn account" target="_blank"><Linkedin/></a>
                                <a href="https://x.com/Diego36196752" title="My Twitter account" target="_blank"><Twitter/></a>
                                <a href="https://www.instagram.com/allan_med7/" title="My instagram profile" target="_blank"><Instagram/></a>
                                <a href="https://www.facebook.com/allan.veliz.237464/" title="My Facebook profile" target="_blank"><Facebook/></a>
                                <a href="https://wa.me/528993175207?" target="_blank" title="My Whatsapp!"><MessageCircle/></a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
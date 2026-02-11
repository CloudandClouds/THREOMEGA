import React from 'react';
import {
    Facebook, Instagram, Linkedin, MessageCircle, Phone, Target,
    Twitter, Youtube, Mail, MapPin, ExternalLink, ShieldCheck, Heart
} from 'lucide-react';

const CallToActionAndFooter = () => {
    const quickLinks = [
        { name: 'About Initiative', href: '#' },
        { name: 'How It Works', href: '#' },
        { name: 'Pricing Plans', href: '#' },
        { name: 'Patient Portal', href: '#' },
        { name: 'Doctor Resources', href: '#' },
    ];

    const resources = [
        { name: 'FOCUS Trial Summary', href: '#' },
        { name: 'Clinical Dosing Guide', href: '#' },
        { name: 'Research Library', href: '#' },
        { name: 'Patient Education', href: '#' },
        { name: 'Evidence Journal', href: '#' },
    ];

    const legal = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'Clinical Disclaimer', href: '#' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', bg: 'hover:bg-blue-600' },
        { icon: Instagram, href: '#', bg: 'hover:bg-pink-600' },
        { icon: Twitter, href: '#', bg: 'hover:bg-sky-500' },
        { icon: Linkedin, href: '#', bg: 'hover:bg-blue-700' },
    ];

    return (
        <footer>
            {/* CTA Section */}
            <div className="relative py-32 px-6 bg-[#8B0000] overflow-hidden">
                {/* Background Text Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none uppercase">
                    ThreOmega
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20 mb-10 backdrop-blur-md">
                            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                            <span className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">Immediate Clinical Protection</span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]" style={{ fontFamily: 'serif' }}>
                            Take Control of Your <br />
                            <span className="text-[#D4AF37]">Heart Health.</span>
                        </h2>

                        <p className="text-white/70 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium italic">
                            "Join 2,500+ patients who have integrated clinical-grade Omega-3 into their daily dialysis regimen."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <button className="group px-10 py-6 bg-white text-gray-900 font-black rounded-3xl transition-all hover:bg-gray-100 hover:scale-105 shadow-2xl">
                                FOR PATIENTS
                                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Order Now</span>
                            </button>
                            <button className="group px-10 py-6 bg-black text-white font-black rounded-3xl transition-all hover:bg-gray-900 hover:scale-105 shadow-2xl border border-white/10">
                                FOR DOCTORS
                                <span className="block text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Get Samples</span>
                            </button>
                            <button className="group px-10 py-6 bg-[#D4AF37] text-gray-900 font-black rounded-3xl transition-all hover:bg-[#B8860B] hover:scale-105 shadow-2xl">
                                CLINICAL CENTERS
                                <span className="block text-black/40 font-bold uppercase tracking-widest mt-1 text-[10px]">Partner In Care</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#1A1A1A] pt-24 pb-12 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                        {/* Company Info */}
                        <div className="md:col-span-4">
                            <h3 className="text-3xl font-black text-white mb-8">
                                ThreOmega™ <span className="text-[#D4AF37]">3ω</span>
                            </h3>
                            <p className="text-white/40 text-lg leading-relaxed mb-10">
                                Advancing nephrology care through evidence-informed supplementation for the global hemodialysis community.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 transition-all ${social.bg} hover:text-white hover:scale-110`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Sections */}
                        <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
                            <div>
                                <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Clinical Access</h4>
                                <ul className="space-y-4">
                                    {quickLinks.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href} className="text-white/40 hover:text-[#D4AF37] transition-colors text-sm font-medium flex items-center gap-2 group">
                                                {link.name}
                                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Evidence Center</h4>
                                <ul className="space-y-4">
                                    {resources.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href} className="text-white/40 hover:text-[#D4AF37] transition-colors text-sm font-medium">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden lg:block">
                                <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-8">Support & Legal</h4>
                                <ul className="space-y-4">
                                    {legal.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href} className="text-white/40 hover:text-[#D4AF37] transition-colors text-sm font-medium">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Utility */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <p className="text-white/20 text-xs">© 2026 Ponoogun™ Health. All rights reserved.</p>
                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2 text-white/20 text-xs">
                                    <Phone className="w-3 h-3" /> +91 (CLINICAL SUPPORT)
                                </span>
                                <span className="flex items-center gap-2 text-white/20 text-xs">
                                    <Mail className="w-3 h-3" /> HELLO@THREEOMEGA.COM
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">System Protocol Active</span>
                        </div>
                    </div>

                    {/* Final Disclaimer */}
                    <div className="mt-12 text-center max-w-4xl mx-auto">
                        <p className="text-[10px] text-white/10 font-bold leading-relaxed uppercase tracking-tighter">
                            DISCLAIMER: THREOMEGA™ IS A DIETARY SUPPLEMENT INTENDED TO PROVIDE MEDICAL NUTRITIONAL SUPPORT. IT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE. ALWAYS CONSULT YOUR NEPHROLOGIST BEFORE MODIFYING YOUR CLINICAL REGIMEN. RESULTS OF THE PISCES-HD TRIAL REPRESENT GENERAL PATIENT COHORTS AND INDIVIDUAL OUTCOMES MAY VARY.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CallToActionAndFooter;

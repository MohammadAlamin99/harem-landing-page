import Image from "next/image";
export default function FooterSection() {
    return (
        <footer className="bg-[#0b2f45] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top row */}
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logo-white.png"
                            alt="Your Logo"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                        <span className="text-lg font-medium text-white">Your logo</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col md:flex-row md:justify-center gap-6 text-sm text-gray-300 font-manrope">
                        <a href="#" className="hover:text-white transition">
                            Features
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Testimonials
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Contact Us
                        </a>
                    </nav>

                    {/* Social */}
                    <div className="md:text-right">
                        <p className="text-sm text-white font-bold mb-4 font-manrope mr-7">
                            Follow us
                        </p>
                        <div className="flex md:justify-end gap-4">
                            <a className="hover:opacity-80 transition cursor-pointer">
                                <Image
                                    src="/images/facebook.png"
                                    alt="Facebook"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>

                            <a className="hover:opacity-80 transition cursor-pointer">
                                <Image
                                    src="/images/twitter.png"
                                    width={22}
                                    height={22}
                                    alt="Twitter"
                                    className="object-contain"
                                />
                            </a>

                            <a className="hover:opacity-80 transition cursor-pointer">
                                <Image
                                    src="/images/instagram.png"
                                    alt="Instagram"
                                    width={22}
                                    height={22}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-10" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 font-manrope">
                    <p>All rights reserved by Your Logo.</p>

                    <p className="mt-2 md:mt-0 font-manrope">
                        Produced by{" "}
                        <span className="font-semibold text-white">AdminMart</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

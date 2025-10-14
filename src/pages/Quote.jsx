import { Link, useNavigate } from "react-router";
import { Droplet, Sun, House, Phone, Mail, Timer, Locate, Linkedin, MessageCircle, FacebookIcon, InstagramIcon, Map, Navigation2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import DowindowLogo from "../assets/dowindow.png"

export default function Quote() {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle");
    const [isSent, setSent] = useState('hidden');
    const [toastBg, setToastBg] = useState('#0B5D1E');
    const [toastMsg1, setToastMsg1] = useState('Request received!');
    const [toastMsg2, setToastMsg2] = useState('You will hear from us soon.');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Quote | DoWindow Systems";
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        formData.append("phone", phone);

        try {
        const response = await fetch("https://formspree.io/f/xkgqpqpy", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setStatus("success");
            setSent('flex');
            setToastBg('bg-[#0B5D1E]');
            setToastMsg1('Request received!');
            setToastMsg2('You will hear from us soon.');
            e.target.reset();
            setPhone("");
        } else {
            setStatus("error");
            setSent('flex');
            setToastBg('bg-[brown]');
            setToastMsg1('Something went wrong.');
            setToastMsg2('Please try again.');
        }
        } catch (err) {
            setStatus("error");
            setSent('flex');
            setToastBg('bg-[brown]');
            setToastMsg1('Something went wrong.');
            setToastMsg2('Please try again.');
        }
    };

    useEffect(() => {
        if (status === 'success') {
            setTimeout(() => {
                setSent('hidden');
                navigate('/')
            }, 3000);
        }
        else if (status === 'error') {
            setTimeout(() => {
                setSent('hidden');
            }, 5000);
        }
    }, [status])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full bg-white shadow  px-[30px] pt-[10px] pb-[15px]`}>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <Link to={'/'} className="flex flex-row items-center md:gap-[5px] gap-[3px]">
                            <img src={DowindowLogo} alt="" className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]" />
                            <p className="md:text-lg text-[13px] text-[#1F1A38] font-bold py-[0px] ">DoWindow<span className="text-[brown] font-bold ml-[2px] ">Systems</span></p>
                        </Link>
                    </div>
                    <Link to={'/'} className="px-3 flex items-center justify-center text-[16px] md:text-[18px]  text-[rgba(0,0,0,0.7)] rounded-[40px]">x</Link>
                </div>
            </nav>
            <div className={`${isSent}fixed top-0 left-0 w-full h-full`}>
                <AnimatePresence>
                {isSent === 'flex' && (
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`fixed top-[60px] right-5 z-50 ${toastBg} text-white px-6 py-4 rounded-md shadow-lg flex flex-col justify-center items-center`}
                    >
                    <p className="text-[14px] md:text-[16px] font-bold">{toastMsg1}</p>
                    <p className="text-[13px] md:text-[15px] font-bold">{toastMsg2}</p>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            <h1 className="quote-header text-[20px] md:text-[35px] mb-[25px] text-center pt-[120px] ">Get A Quote</h1>
             <form
                onSubmit={handleSubmit}
                className="w-full px-10 md:px-0 mb-15 md:mb-30 flex flex-col items-center"
            >
                <input
                className="w-full md:w-[50%] h-[40px] md:h-[50px] px-[5px] border border-[rgba(0,0,0,0.5)] rounded-[2px] text-[13px] mb-[20px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                type="text"
                name="firstName"
                placeholder="First name"
                required
                />

                <input
                className="w-full md:w-[50%] h-[40px] md:h-[50px] px-[5px] border border-[rgba(0,0,0,0.5)] rounded-[2px] text-[13px] mb-[20px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                />

                <input
                className="md:w-[50%] w-full h-[40px] md:h-[50px] px-[5px] border border-[rgba(0,0,0,0.5)] rounded-[2px] mb-[20px] text-[13px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                type="email"
                name="email"
                placeholder="Email"
                required
                />

                <div className="md:w-[50%] w-full mb-[20px]">
                    <PhoneInput
                        country="gh"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        enableSearch={true}
                        inputClass="!w-full !border-[rgba(0,0,0,0.5)] !rounded-[2px] focus:!border-[#2D3047] focus:!ring-[#2D3047]"
                        buttonClass="!border-[rgba(0,0,0,0.5)]"
                    />
                </div>

                <div className="w-full md:w-[50%] mb-1 md:mb-5">
                <textarea
                    className="md:w-[100%] w-full h-[150px] md:h-[250px] px-[5px] py-[10px] border border-[rgba(0,0,0,0.5)] text-[13px] md:text-[16px] rounded-[2px] mb-[20px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                ></textarea>
                </div>

                <div className="flex md:w-[50%] w-full justify-end mb-[20px]">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-[50%] h-[50px] md:h-[60px] flex items-center justify-center bg-[#2D3047] font-bold text-white text-[14px] md:text-[16px] rounded-[2px] hover:opacity-[0.7] transition-all duration-100 active:scale-95 active:opacity-[1]"
                >
                    {status === "sending" ? "Sending..." : "Request Quote"}
                </button>
                </div>
            </form>

            <footer className="h-[auto] pt-[30px] bg-[#f2f2f2]">
                <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-0 md:pb-[80px] pb-[50px]">
                    <div className="md:w-[20%] flex flex-col items-center md:items-start">
                        <div className="flex flex-row gap-2 items-center mb-2 md:mb-4">
                            <img src={DowindowLogo} alt="" className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]" />
                            <p className="text-[16px] md:text-[25px] text-[#1F1A38] font-bold py-[0px] ">DoWindow<span className="text-[brown] font-bold ml-[5px] ">Systems</span></p>
                        </div>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] text-center md:text-left px-8 md:px-0 ">We are recognized for our expertise in window and door installations throughout Ghana, we take pride in delivering projects promptly and cost-effectively.</p>
                        <p className="text-[13px] md:text-[16px] font-semibold text-[rgba(0,0,0,0.8)] font-semibold">Core Values:</p>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-semibold">- Quality</p>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-semibold">– Workmanship</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-semibold">– Friendly</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-[16px] md:text-[25px] text-[#1F1A38] font-bold py-[0px] mb-2 md:mb-4 ">Our Products</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Sliding Windows</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Casement Windows</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Projected Windows</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Sliding Doors</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Hinge Doors</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Swing Doors</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] mb-2 font-">Frameless Doors</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-">Shower Cubicles</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-[16px] md:text-[25px] text-[#1F1A38] font-bold py-[0px] mb-2 md:mb-4 ">Contact Us</p>
                        <div className="flex flex-row items-center gap-3 mb-2">
                            <House className="w-3 h-3 md:w-4 md:h-4"/>
                            <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)]">18 Dede Tagoe CR, Santa Maria, Accra</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 mb-2">
                            <Phone className="w-3 h-3 md:w-4 md:h-4"/>
                            <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)]">+233 244 229 958</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 mb-7">
                            <Mail className="w-3 h-3 md:w-4 md:h-4"/>
                            <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)]">info@dowindowsystems.com</p>
                        </div>
                        <div className="flex flex-row items-center gap-5 mb-7">
                            <button onClick={() =>{}} className="social-icon-con whatsapp-con">
                                <MessageCircle  className="social-icon w-4 h-4 md:w-5 md:h-5"/>
                            </button>
                            <button onClick={() =>{}} className="social-icon-con facebook-con">
                                <FacebookIcon  className="social-icon w-4 h-4 md:w-5 md:h-5"/>
                            </button>
                            <button onClick={() =>{}} className="social-icon-con instagram-con">
                                <InstagramIcon  className="social-icon w-4 h-4 md:w-5 md:h-5"/>
                            </button>
                            <button onClick={() =>{}} className="social-icon-con linkedin-con">
                                <Linkedin  className="social-icon w-4 h-4 md:w-5 md:h-5"/>
                            </button>
                        </div>
                        <p className="text-[16px] md:text-[25px] text-[#1F1A38] font-bold py-[0px] mb-2 mt-6">Working Hours</p>
                        <div className="flex flex-row items-center gap-3 mb-2">
                            <Timer className="w-3 h-3 md:w-4 md:h-4"/>
                            <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)]">Mon - Fri: 9:00 am - 5:00 pm</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 mb-7">
                            <Timer className="w-3 h-3 md:w-4 md:h-4"/>
                            <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)]">Sat: 9:00 am - 1.00 pm</p>
                        </div>
                        <a href="tel:+233244229958" className="flex justify-center items-center w-[35%] h-[40px] md:w-[60%] md:h-[50px] border-1 bg-[brown] text-white text-[14px] font-bold md:text-[16px] hover:opacity-[0.7] transition-all duration-100 active:scale-95 active:opacity-[1]">
                            Call Us
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center  py-2">
                    <p className="text-[16px] md:text-[18px] mr-[5px] text-[rgba(0,0,0,0.6)]">©</p>
                    <p className="text-[12px] md:text-[16px] text-center text-[rgba(0,0,0,0.6)]">Copyright doWindow Systems</p>
                </div>
            </footer>
        </>
    );
}
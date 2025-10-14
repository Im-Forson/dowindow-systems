import { useState, useEffect } from "react";
import { Link } from "react-router";
import PhoneInput from "react-phone-input-2";
import { motion, AnimatePresence } from "framer-motion";

import DowindowLogo from "../assets/dowindow.png"
import SlidingProduct from "../assets/product-sliding-window.jpg";
import ProjectedProduct from "../assets/product-projected-window.jpg";
import CasementProduct from "../assets/product-casement-window.jpg";
import FixedProduct from "../assets/product-fixed-window.jpg";
import ShowerProduct from "../assets/shower.png";
import Work1 from "../assets/work-tema.jpg";
import WorkPramPram from "../assets/work-prampram-1.jpg";
import WorkComm12 from "../assets/work-comm12.jpg";
import WorkSpintex from "../assets/work-spintex.jpg";
import WorkOyarifa from "../assets/work-oyarifa.jpg";
import WorkNewNation from "../assets/work-new-nation.jpg";
import WorkOyarifa2 from "../assets/work-oyarifa-2.jpg";
import WorkAdj2 from "../assets/work-adj-2.jpg";
import WorkKasoa from "../assets/work-kasoa.jpg";

import Logo from "../assets/logo.png"
import Slider from "../components/Slider";

import { Droplet, Sun, House, Phone, Mail, Timer, Locate, Linkedin, MessageCircle, FacebookIcon, InstagramIcon, Map, Navigation2 } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { Wind } from "lucide-react";
import { Lock } from "lucide-react";
import { Droplets } from "lucide-react";
import { Zap } from "lucide-react";
import { Wrench } from "lucide-react";
import ProductsSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import SliderAbout from "../components/SliderAbout";

const works = [
  {
    id: 1,
    title: "Tema - Ghana",
    description: "Smooth-sliding door designed for easy indoor-outdoor access.",
    image: Work1,
  },
  {
    id: 2,
    title: "Tema - Ghana",
    description: "Smooth and space-saving sliding windows that allow maximum light and ventilation.",
    image: WorkComm12,
  },
  {
    id: 3,
    title: "Prampram - Ghana",
    description: "Energy-efficient aluminium casement windows.",
    image: WorkPramPram,
  },
  {
    id: 4,
    title: "Spintex - Ghana",
    description: "Energy-efficient aluminium casement windows.",
    image: WorkSpintex,
  },
  {
    id: 5,
    title: "North Legon - Ghana",
    description: "Frameless swing door system for modern homes and offices.",
    image: WorkNewNation,
  },
  {
    id: 6,
    title: "Oyarifa - Ghana",
    description: "Smooth sliding division-windows that allow maximum light and ventilation.",
    image: WorkOyarifa,
  },
  {
    id: 7,
    title: "Oyarifa - Ghana",
    description: "Modern glass façade for sleek buildings.",
    image: WorkOyarifa2,
  },
  {
    id: 8,
    title: "Winneba - Ghana",
    description: "Non-opening window for clear, bright views.",
    image: WorkAdj2,
  },
  {
    id: 9,
    title: "Kasoa - Ghana",
    description: "Smooth and space-saving sliding windows that allow maximum light and ventilation.",
    image: WorkKasoa,
  },
];

export default function Main() {
    const [navHeight, setNavHeight] = useState('h-[100px]');
    const [navlinkPad, setNavLinkPad] = useState('py-[25px]');

    const [activeSection, setActiveSection] = useState("home");
    const [section, setSection] = useState('home');

    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle");
    const [isSent, setSent] = useState('hidden');
    const [toastBg, setToastBg] = useState('bg-[brown]');
    const [toastMsg1, setToastMsg1] = useState('Something went wrong.');
    const [toastMsg2, setToastMsg2] = useState('Please try again.');
    const [] = useState();

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
        if (status === 'success' || status === 'error') {
            setTimeout(() => {
                setSent('hidden');
                navigate('/')
            }, 5000);
        }
    }, [status])

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        { threshold: 0.6 } // section is considered active when 60% visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
        sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

   
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full bg-white shadow z-50  px-[30px] pt-[10px] pb-[15px]`}>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center md:gap-[5px] gap-[3px]">
                            <img src={DowindowLogo} alt="" className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]" />
                            <p className="md:text-lg text-[13px] text-[#1F1A38] font-bold py-[0px] ">DoWindow<span className="text-[brown] font-bold ml-[2px] ">Systems</span></p>
                        </div>
                    </div>
                    <div className="gap-10 hidden md:flex">
                        <button
                        onClick={() => {scrollToSection('home')}}
                        className={`${navlinkPad} ${activeSection=='home' ? 'border-[#1F1A38]' : 'border-[transparent]'} text-[16px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                        >
                            Home
                        </button>
                        <button
                        onClick={() => {scrollToSection('about')}}
                        className={`${navlinkPad} ${activeSection=='about' ? 'border-[#1F1A38]' : 'border-[transparent]'} text-[18px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                        >
                            About
                        </button>
                        <button
                        onClick={() => {scrollToSection('products')}}
                        className={`${navlinkPad} ${activeSection=='products' ? 'border-[#1F1A38]' : 'border-[transparent]'} text-[18px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                        >
                            Products
                        </button>
                        <button
                        onClick={() => {scrollToSection('works')}}
                        className={`${navlinkPad} ${activeSection=='works' ? 'border-[#1F1A38]' : 'border-[transparent]'} text-[18px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                        >
                            Works
                        </button>
                        <button
                        onClick={() => {scrollToSection('contact')}}
                        className={`${navlinkPad} ${activeSection=='contact' ? 'border-[#1F1A38]' : 'border-[transparent]'} text-[18px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                        >
                            Contact
                        </button>
                    </div>
                    <Link
                    to="/quote"
                    className="fadePulse px-3 py-2 md:py-3 rounded-[2px] text-white text-[12px] font-bold md:text-[16px] hover:opacity-80"
                    >
                    Get a Quote
                    </Link>
                </div>
                <div className="flex md:hidden flex-row justify-between mt-2 ">
                    <button
                    onClick={() => {scrollToSection('home')}}
                    className={`${activeSection=='home' ? 'border-[#1F1A38]' : 'border-[transparent]'} py-[10px] text-[13px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                    >
                        Home
                    </button>
                    <button
                    onClick={() => {scrollToSection('about')}}
                    className={`${activeSection=='about' ? 'border-[#1F1A38]' : 'border-[transparent]'} py-[10px] text-[13px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                    >
                        About
                    </button>
                    <button
                    onClick={() => {scrollToSection('products')}}
                    className={`${activeSection=='products' ? 'border-[#1F1A38]' : 'border-[transparent]'} py-[10px] text-[13px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                    >
                        Products
                    </button>
                    <button
                    onClick={() => {scrollToSection('works')}}
                    className={`${activeSection=='works' ? 'border-[#1F1A38]' : 'border-[transparent]'} py-[10px] text-[13px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                    >
                        Works
                    </button>
                    <button
                    onClick={() => {scrollToSection('contact')}}
                    className={`${activeSection=='contact' ? 'border-[#1F1A38]' : 'border-[transparent]'} py-[10px] text-[13px] cursor-pointer border-b-[2px]  hover:text-[rgba(0,0,0,0.8)]`}
                    >
                        Contact
                    </button>
                </div>
            </nav>
            <div className={`${isSent} fixed top-0 left-0 w-full h-full`}>
                <AnimatePresence>
                {isSent === 'flex' && (
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`fixed top-[105px] right-5 z-50 ${toastBg} text-white px-6 py-4 rounded-md shadow-lg flex flex-col justify-center items-center`}
                    >
                    <p className="text-[14px] md:text-[16px] font-bold">{toastMsg1}</p>
                    <p className="text-[13px] md:text-[15px] font-bold">{toastMsg2}</p>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            <section id="home" className="pt-[100px] h-[auto]">
                <Slider/>
            </section>
            <section id="about" className="h-[auto] pt-[120px]">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[50%] ">
                        <h1 className="section-header text-[20px] md:text-[35px]">About Us</h1>
                        <div className="h-[100%] flex justify-center items-center px-[50px] ">
                            <SliderAbout/>
                        </div>
                    </div>
                    <div className="md:w-[50%] md:pr-[90px] px-[50px]">
                        <p className="about-text text-[13px] md:text-[17px] font mb-[20px]">
                            At <span className="font-bold">doWindow Systems,</span> we <span className="font-bold">fabricate,</span>, and <span className="font-bold">install</span> premium <span className="font-bold">aluminium</span> and <span className="font-bold">glass solutions</span> that redefine modern living and working spaces. Based in <span className="font-bold">Ghana</span>, we are committed to delivering innovative, durable, and aesthetically pleasing <span className="font-bold">window and door systems</span> that meet both residential and commercial needs.
                        </p>
                        <p className="about-text text-[13px] md:text-[17px] font mb-[20px]">
                            We specialize in a wide range of products, including <span className="font-bold">sliding windows and doors, projected windows, casement windows, fixed windows, aluminium hinge doors, swing doors, frameless glass doors,</span> and sleek <span className="font-bold">shower cubicles</span>. Every product we create is tailored to ensure optimal performance, <span className="font-bold">long-lasting strength,</span> and elegant design — all while maintaining affordability and precision.
                        </p>
                        <p className="about-text text-[13px] md:text-[17px] font">
                            We are a <span className="font-bold">young and passionate team,</span> driven by innovation and a commitment to excellence. Each installation is handled with care and attention to detail, ensuring that <span className="font-bold">our clients receive products that last, perform, and inspire confidence.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section id="products" className="h-[auto] pt-[120px]">
                <h1 className="section-header text-[20px] md:text-[35px] mb-[25px]">Products</h1>
                <div className="px-[20px]">
                    <div className="product-card flex flex-col md:flex-row items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[30px] ">
                        <div className="md:w-[20%] h-[auto] flex md:flex-col items-center gap-2 md:items-center md:justifty-center md:gap-3 mb-5 md:mb-0 ">
                            <img src={SlidingProduct} alt="" className="h-[60px] w-[50px] md:h-[110px] md:w-[100px]" />
                            <p className="product-title text-[16px] md:text-[17px] text-[#1E2019] font-bold ">Sliding Window & Door</p>
                        </div>
                        <div className="md:w-[70%] md:px-[50px] ">
                            <p className="md:text-[14px] text-[13px] text-center mb-[20px]">Designed to maximize natural light and airflow, our Sliding Window Systems bring comfort, elegance, and practicality together in one design. They are perfect for both residential and commercial buildings, giving your space a clean, modern aesthetic while improving energy efficiency and ventilation.</p>
                            <div className="flex justify-center gap-5">
                                <div className="flex items-center gap-3">
                                    <Sun className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Natural light</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Durable</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Maximize2 className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Space-saving</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card flex flex-col md:flex-row items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[30px] ">
                        <div className="md:w-[20%] h-[auto] flex md:flex-col items-center gap-2 md:items-center md:justifty-center md:gap-3 mb-5 md:mb-0 ">
                            <img src={ProjectedProduct} alt="" className="h-[60px] w-[50px] md:h-[110px] md:w-[100px]" />
                            <p className="product-title text-[16px] md:text-[17px] text-[#1E2019] font-bold ">Projected Window</p>
                        </div>
                        <div className="md:w-[70%] md:px-[50px] ">
                            <p className="md:text-[14px] text-[13px] text-center mb-[20px]">Bring sophistication and ventilation control to your space with our Projected Window Systems, expertly engineered for durability and elegance. Designed to open outward from the bottom or top, projected windows allow maximum airflow even during light rain, while maintaining a sleek and modern look that enhances any building façade.</p>
                            <div className="flex justify-center gap-5">
                                <div className="flex items-center gap-3">
                                    <Wind className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Excellent Ventilation</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Durable</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Lock className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Secure and Functional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card flex flex-col md:flex-row items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[30px] ">
                        <div className="md:w-[20%] h-[auto] flex md:flex-col items-center gap-2 md:items-center md:justifty-center md:gap-3 mb-5 md:mb-0 ">
                            <img src={CasementProduct} alt="" className="h-[60px] w-[50px] md:h-[110px] md:w-[100px]" />
                            <p className="product-title text-[16px] md:text-[17px] text-[#1E2019] font-bold ">Casement Window</p>
                        </div>
                        <div className="md:w-[70%] md:px-[50px] ">
                            <p className="md:text-[14px] text-[13px] text-center mb-[20px]">Classic in design yet modern in performance, doWindow Systems’ Casement Window offers timeless style with unmatched ventilation and ease of use. Hinged on the side and opening outward like a door, casement windows provide maximum airflow, clear views, and superior energy efficiency — making them a preferred choice for both residential and commercial projects.</p>
                            <div className="flex justify-center gap-5">
                                <div className="flex items-center gap-3">
                                    <Wind className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Maximum Airflow</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Durable Construction</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Droplets className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Wheather-Tight Seal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card flex flex-col md:flex-row items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[30px] ">
                        <div className="md:w-[20%] h-[auto] flex md:flex-col items-center gap-2 md:items-center md:justifty-center md:gap-3 mb-5 md:mb-0 ">
                            <img src={FixedProduct} alt=""className="h-[60px] w-[50px] md:h-[110px] md:w-[100px]" />
                            <p className="product-title text-[16px] md:text-[17px] text-[#1E2019] font-bold ">Fixed Window</p>
                        </div>
                        <div className="md:w-[70%] md:px-[50px] ">
                            <p className="md:text-[14px] text-[13px] text-center mb-[20px]">Simple, elegant, and built for clarity — our Fixed Window Systems are designed to frame beautiful outdoor views while allowing abundant natural light into your space. Fixed windows (also called picture windows) do not open, making them ideal for areas where ventilation isn’t required but visibility and aesthetics are key.</p>
                            <div className="flex justify-center gap-5">
                                <div className="flex items-center gap-3">
                                    <Sun className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Maximum Natural Light</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Energy Efficient</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Wrench className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Low Maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card flex flex-col md:flex-row items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] ">
                        <div className="md:w-[20%] h-[auto] flex md:flex-col items-center gap-2 md:items-center md:justifty-center md:gap-3 mb-5 md:mb-0 ">
                            <img src={ShowerProduct} alt="" className="h-[60px] w-[50px] md:h-[110px] md:w-[100px]"/>
                            <p className="product-title text-[16px] md:text-[17px] text-[#1E2019] font-bold ">Shower Cubicle</p>
                        </div>
                        <div className="md:w-[70%] md:px-[50px] ">
                            <p className="md:text-[14px] text-[13px] text-center mb-[20px]">Experience elegance and modern luxury with our Frameless Glass Shower Cubicle, crafted from high-quality tempered glass for unmatched strength and safety. Whether you prefer a sliding, hinged, or corner configuration, our shower cubicles are tailored to fit seamlessly into your bathroom layout.</p>
                            <div className="flex justify-center gap-5">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Tempered Safety Glass</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Droplet className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Corrosion-Resistant Fittings</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Wrench className="product-strength-icon w-6 h-6 text-[gray]" />
                                    <p className="product-strength-text text-[12px] text-[gray] ml-[-7px] font-bold ">Easy Maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="works" className="h-[auto] pt-[120px]">
                <h1 className="section-header text-[20px] md:text-[35px] mb-[25px]">Works</h1>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work) => (
                            <div
                            key={work.id}
                            className="relative overflow-hidden rounded-[2px] group shadow-lg"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[transparent)] hover:bg-[rgba(0,0,0,0.5))] transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                                    <p className="text-sm">{work.description}</p>
                                    <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="h-[auto] pt-[120px] mb-[120px]">
                <h1 className="section-header text-[20px] md:text-[35px] mb-[25px]">Contact Us</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[65%] md:pl-[70px] mb-3 md:mb-0">
                        <form onSubmit={handleSubmit} className="w-full px-10 md:px-0 ">
                           <div className="flex flex-col md:flex-row w-full gap-5 mb-[20px] ">
                                <input 
                                    className="md:w-[31%] h-[40px] md:h-[40px] px-[5px] border-1 border-[rgba(0,0,0,0.5)] rounded-[2px] text-[13px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    required
                                />
                                <input 
                                    className="md:w-[31%] h-[40px] md:h-[40px] px-[5px] border-1 border-[rgba(0,0,0,0.5)] rounded-[2px] text-[13px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    required
                                />
                           </div>
                           <input 
                                className="md:w-[65%] w-full h-[40px] md:h-[40px] px-[5px] border-1 border-[rgba(0,0,0,0.5)] rounded-[2px] mb-[20px] text-[13px] md:text-[16px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <div className="md:w-[65%] w-full mb-[20px]">
                                <PhoneInput
                                    country="gh"
                                    value={phone}
                                    onChange={(value) => setPhone(value)}
                                    enableSearch={true}
                                    inputClass="!w-full !border-[rgba(0,0,0,0.5)] !rounded-[2px] focus:!border-[#2D3047] focus:!ring-[#2D3047]"
                                    buttonClass="!border-[rgba(0,0,0,0.5)]"
                                />
                            </div>
                            <div className="">
                                <textarea 
                                    className="md:w-[65%] w-full h-[150px] md:h-[200px] px-[5px] py-[10px] border-1 border-[rgba(0,0,0,0.5)] text-[13px] md:text-[16px] rounded-[2px] mb-[20px] focus:ring-1 focus:ring-[#2D3047] outline-none"
                                    name="message"
                                    placeholder="Your message"
                                    required
                                />
                            </div>
                            <div className="flex md:w-[65%] w-full justify-end mb-[20px] ">
                                <button type="submit" disabled={status === "sending"} className="w-[50%] h-[50px] md:h-[60px] flex items-center justify-center bg-[#2D3047] text-white text-[14px] md:text-[16px] font-bold rounded-[2px] hover:opacity-[0.7]">{status === "sending" ? "Sending..." : "Send Message"}</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[35%] w-full px-[50px] md:pr-[70px] flex flex-col gap-6">
                        <h1 className="md:text-3xl text-lg">Need more information on details? Call Us <span className="text-[brown]"><a href="tel:+233244229958">+233 244 229 958</a></span></h1>
                        <div className="">
                            <div className="flex flex-row items-center gap-3 mb-2 ">
                                <House className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-[13px] md:text-[16px]">Amoanda, Central Region, Ghana</p>
                            </div>
                            <div className="flex flex-row items-center gap-3 mb-2 ">
                                <Navigation2 className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-[13px] md:text-[16px]">GC-017-7312</p>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <Mail className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-[13px] md:text-[16px]">info@dowindowsystems.com</p>
                            </div>
                        </div>
                        <p className="md:text-[16px] text-[13px] italic">
                            Our team is <span className="text-[brown] font-semibold">always ready</span> to guide you through the 
                            <span className="text-[brown] font-semibold"> best window and door solutions</span> perfectly tailored for 
                            <span> your home, office, or project needs.</span>
                        </p>
                    </div>
                </div>
            </section>
            <footer className="h-[auto] pt-[30px] bg-[#f2f2f2]">
                <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-0 md:pb-[80px] pb-[50px]">
                    <div className="md:w-[20%] flex flex-col items-center md:items-start">
                        <div className="flex flex-row gap-2 items-center mb-2 md:mb-4">
                            <img src={DowindowLogo} alt="" className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]" />
                            <p className="text-[16px] md:text-[25px] text-[#1F1A38] font-bold py-[0px] ">DoWindow<span className="text-[brown] font-bold ml-[5px] ">Systems</span></p>
                        </div>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] text-center md:text-left px-8 md:px-0 ">We are recognized for our expertise in window and door installations throughout Ghana, we take pride in delivering projects promptly and cost-effectively.</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-bold">Core Values:</p>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-bold">- Quality</p>
                        <p className="mb-2 text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-bold">– Workmanship</p>
                        <p className="text-[13px] md:text-[16px] text-[rgba(0,0,0,0.8)] font-bold">– Friendly</p>
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
                        <a href="tel:+233244229958" className="flex justify-center items-center w-[35%] h-[40px] md:w-[60%] md:h-[50px] border-1 bg-[brown] text-white text-[14px] md:text-[16px] font-bold hover:opacity-[0.7] ">
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
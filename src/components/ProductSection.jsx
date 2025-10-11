

import SlidingProduct from "../assets/product-sliding-window.jpg";
import ProjectedProduct from "../assets/product-projected-window.jpg";
import CasementProduct from "../assets/product-casement-window.jpg";
import FixedProduct from "../assets/product-fixed-window.jpg";
import ShowerProduct from "../assets/shower.png";

import { Droplet, Sun } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { Wind } from "lucide-react";
import { Lock } from "lucide-react";
import { Droplets } from "lucide-react";
import { Brush } from "lucide-react";
import { Zap } from "lucide-react";
import { Wrench } from "lucide-react";

export default function ProductsSection() {
    return (
        <>
            <h1 className="section-header mb-[25px]">Products</h1>
            <div className="px-[20px]">
                <div className="product-card flex items-center w-[100%]  border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[30px] ">
                    <div className="w-[20%] flex flex-col items-center justifty-center gap-3 ">
                        <img src={SlidingProduct} alt="" className="h-[110px] w-[100px]" />
                        <p className="product-title text-[17px] text-[#1E2019] font-bold ">Sliding Window & Door</p>
                    </div>
                    <div className="w-[70%] px-[50px] ">
                        <p className="product-description text-[14px] text-center mb-[20px]">Designed to maximize natural light and airflow, our Sliding Window Systems bring comfort, elegance, and practicality together in one design. They are perfect for both residential and commercial buildings, giving your space a clean, modern aesthetic while improving energy efficiency and ventilation.</p>
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
                <div className="product-card flex items-center w-[100%] border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[70px] ">
                    <div className="w-[20%] flex flex-col items-center justifty-center gap-3 ">
                        <img src={ProjectedProduct} alt="" className="h-[110px] w-[100px]" />
                        <p className="text-[17px] text-[#1E2019] font-bold ">Projected Window</p>
                    </div>
                    <div className="w-[70%] px-[50px] ">
                        <p className="product-description text-[14px] text-center mb-[20px]">Bring sophistication and ventilation control to your space with our Projected Window Systems, expertly engineered for durability and elegance. Designed to open outward from the bottom or top, projected windows allow maximum airflow even during light rain, while maintaining a sleek and modern look that enhances any building façade.</p>
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
                <div className="product-card flex items-center w-[100%] border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[70px] ">
                    <div className="w-[20%] flex flex-col items-center justifty-center gap-3 ">
                        <img src={CasementProduct} alt="" className="h-[160px] w-[100px]" />
                        <p className="text-[17px] text-[#1E2019] font-bold ">Casement Window</p>
                    </div>
                    <div className="w-[70%] px-[50px] ">
                        <p className="product-description text-[14px] text-center mb-[20px]">Classic in design yet modern in performance, doWindow Systems’ Casement Window offers timeless style with unmatched ventilation and ease of use. Hinged on the side and opening outward like a door, casement windows provide maximum airflow, clear views, and superior energy efficiency — making them a preferred choice for both residential and commercial projects.</p>
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
                <div className="product-card flex items-center w-[100%] border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[70px] ">
                    <div className="w-[20%] flex flex-col items-center justifty-center gap-3 ">
                        <img src={FixedProduct} alt=""className="h-[150px] w-[100px]" />
                        <p className="text-[17px] text-[#1E2019] font-bold ">Fixed Window</p>
                    </div>
                    <div className="w-[70%] px-[50px] ">
                        <p className="product-description text-[14px] text-center mb-[20px]">Simple, elegant, and built for clarity — our Fixed Window Systems are designed to frame beautiful outdoor views while allowing abundant natural light into your space. Fixed windows (also called picture windows) do not open, making them ideal for areas where ventilation isn’t required but visibility and aesthetics are key.</p>
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
                <div className="product-card flex items-center w-[100%] border-[0px] border-[rgba(0,0,0,0.03)] rounded-[5px] px-[10px] py-[20px] mb-[70px] ">
                    <div className="w-[20%] flex flex-col items-center justifty-center gap-3 ">
                        <img src={ShowerProduct} alt="" className="h-[150px] w-[100px]"/>
                        <p className="text-[17px] text-[#1E2019] font-bold ">Shower Cubicle</p>
                    </div>
                    <div className="w-[70%] px-[50px] ">
                        <p className="product-description text-[14px] text-center mb-[20px]">Experience elegance and modern luxury with our Frameless Glass Shower Cubicle, crafted from high-quality tempered glass for unmatched strength and safety. Whether you prefer a sliding, hinged, or corner configuration, our shower cubicles are tailored to fit seamlessly into your bathroom layout.</p>
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
        </>
    );
}
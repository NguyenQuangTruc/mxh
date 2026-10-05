'use client'
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { useState } from "react";
const HeaderMobile = () => {

    const [boxUserStatus, setBoxUserStatus] = useState<Boolean>(false)
    const [boxMenuStatus, setBoxMenuStatus] = useState<Boolean>(false)

    const swapBoxUserStatus = () => {
        setBoxUserStatus(status => !status)
    }

    const swapBoxMenuStatus = () => {
        setBoxMenuStatus(status => !status)
    }
    return (
        <div className="flex justify-between items-center p-3 border-b-1 border-gray-300 md:gap-10 lg:gap-20 lg:pl-30 lg:pr-30 xl:pl-50 xl:pr-50 xl:gap-30">
            <div className="flex gap-2">
                <button onClick={() => {
                    swapBoxMenuStatus()
                }}
                    className="lg:hidden"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="flex items-center gap-2" href={"/"}>
                    <img className="max-w-10" src={Logo.src} alt="" />
                    <div>
                        <span className="text-xl">Fakebook</span>
                    </div>
                </Link>
            </div>



            <div className="w-full hidden md:block">
                <input className="bg-gray-100 p-2 rounded-xl w-full" placeholder="Tìm kiếm..." type="text" />
            </div>

            <div className="flex gap-5 items-center">
                <Link className="" href={"/"}>
                    <i className="fa-regular fa-bell text-xl"></i>
                </Link>

                <Link className="" href={"/"}>
                    <i className="fa-regular fa-message text-xl"></i>
                </Link>

                <button onClick={() => {
                    swapBoxUserStatus()
                }}
                    className="border-2 border-orange-400 rounded-3xl p-1 relative z-10"
                >
                    <img className="rounded-3xl max-w-7" src={Logo.src} alt="" />
                    <div className={`${boxUserStatus ? 'block' : 'hidden'} bg-amber-100 absolute top-10 right-0 min-w-30 p-3 rounded-b-2xl shadow-xs shadow-amber-200`}>
                        <Link className="block mt-2" href={"/"}>
                            Trang chủ
                        </Link>
                        <Link className="block mt-2" href={"/"}>
                            Đăng nhập
                        </Link>
                        <Link className="block mt-2" href={"/"}>
                            Đăng xuất
                        </Link>
                    </div>
                </button>
            </div>

            {/* menu mobile */}
            <div className={`${boxMenuStatus ? 'block' : 'hidden'} lg:hidden absolute top-0 left-0 w-2/3 p-5 h-full rounded-r-2xl bg-amber-100`}>
                <div className="flex justify-between items-center">
                    <div>
                        <span>MENU</span>
                    </div>

                    <button onClick={() => {
                        swapBoxMenuStatus()
                    }}
                        className="bg-gray-50 w-10 h-10 rounded-full"
                    ><i className="fa-solid fa-x"></i></button>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile
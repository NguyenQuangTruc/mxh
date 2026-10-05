'use client'
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { useState } from "react";
const HeaderMobile = () => {

    const [boxUserStatus, setBoxUserStatus] = useState<boolean>(false)
    const [boxMenuStatus, setBoxMenuStatus] = useState<boolean>(false)

    const swapBoxUserStatus = () => {
        setBoxUserStatus(status => !status)
    }

    const swapBoxMenuStatus = () => {
        setBoxMenuStatus(status => !status)
    }
    return (
        <>
        <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 shadow-[0_4px_24px_-20px_rgba(54,39,25,0.45)] backdrop-blur-xl">
            <div className="relative mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6">
            <div className="flex shrink-0 items-center gap-3">
                <button onClick={() => {
                    swapBoxMenuStatus()
                }}
                    aria-label="Mở menu"
                    className="grid size-10 place-items-center rounded-xl text-stone-600 transition hover:bg-orange-50 hover:text-orange-700 lg:hidden"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link className="flex items-center gap-2" href={"/"}>
                    <img className="size-10 rounded-xl object-cover" src={Logo.src} alt="" />
                    <span className="text-[19px] font-extrabold tracking-tight text-stone-800">Fakebook</span>
                </Link>
            </div>

            <div className="hidden w-full max-w-[440px] md:block">
                <label className="flex h-11 items-center gap-3 rounded-2xl border border-stone-100 bg-stone-50 px-4 text-stone-400 transition focus-within:border-orange-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100/70">
                    <i className="fa-solid fa-magnifying-glass text-sm"></i>
                    <input className="w-full bg-transparent text-sm text-stone-700 placeholder:text-stone-400" placeholder="Tìm kiếm..." type="text" />
                </label>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <Link aria-label="Thông báo" className="grid size-10 place-items-center rounded-xl text-stone-500 transition hover:bg-orange-50 hover:text-orange-700" href={"/"}>
                    <i className="fa-regular fa-bell text-lg"></i>
                </Link>

                <Link aria-label="Tin nhắn" className="grid size-10 place-items-center rounded-xl text-stone-500 transition hover:bg-orange-50 hover:text-orange-700" href={"/"}>
                    <i className="fa-regular fa-message text-lg"></i>
                </Link>

                <div className="relative ml-1">
                    <button onClick={() => {
                        swapBoxUserStatus()
                    }}
                        aria-label="Tài khoản"
                        aria-expanded={boxUserStatus}
                        className="relative z-10 rounded-full p-0.5 ring-2 ring-orange-200 transition hover:ring-orange-400"
                    >
                        <img className="size-8 rounded-full object-cover" src={Logo.src} alt="" />
                    </button>
                    <div className={`${boxUserStatus ? 'block' : 'hidden'} absolute right-0 top-12 z-50 min-w-44 overflow-hidden rounded-2xl border border-stone-100 bg-white p-2 text-left shadow-xl shadow-stone-900/10`}>
                        <Link className="block rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-orange-50" href={"/"}>
                            Trang chủ
                        </Link>
                        <Link className="block rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-orange-50" href={"/"}>
                            Đăng nhập
                        </Link>
                        <Link className="block rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-orange-50" href={"/"}>
                            Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>

            </div>
        </header>
            <div className={`${boxMenuStatus ? 'block' : 'hidden'} fixed inset-0 z-50 bg-stone-950/35 backdrop-blur-[2px] lg:hidden`}>
                <div className="min-h-dvh w-[min(84vw,340px)] rounded-r-[28px] border-r border-stone-200 bg-white p-5 shadow-2xl">
                    <div className="mb-8 flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.18em] text-stone-400">MENU</span>
                        <button onClick={() => {
                            swapBoxMenuStatus()
                        }}
                            aria-label="Đóng menu"
                            className="grid size-10 place-items-center rounded-xl bg-stone-50 text-stone-600 transition hover:bg-orange-50 hover:text-orange-700"
                        ><i className="fa-solid fa-x"></i></button>
                    </div>
                    <nav className="grid gap-2">
                        <Link className="rounded-xl bg-orange-50 px-4 py-3 font-semibold text-orange-800" href={"/"}>
                            <i className="fa-solid fa-house-chimney mr-3 w-5 text-center"></i>Bảng tin
                        </Link>
                        <Link className="rounded-xl px-4 py-3 font-medium text-stone-600 transition hover:bg-stone-50" href={"/"}>
                            <i className="fa-regular fa-images mr-3 w-5 text-center"></i>Kỷ niệm gia đình
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default HeaderMobile
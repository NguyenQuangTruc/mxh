"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { HttpStatusCode, isAxiosError } from "axios";
import { createUser } from "../../api/authApi";
import type { UserReq } from "../../Types/User";


type Gender = "male" | "female" | "other";

type RegisterFormData = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    gender: Gender | "";
};

const inputClassName =
    "mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 transition placeholder:text-stone-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100";

export default function RegisterPage() {


    const [formData, setFormData] = useState<RegisterFormData>({
        fullname: "",
        username: "",
        email: "",
        password: "",
        gender: "",
    });
    const [notice, setNotice] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNotice("");
        setIsSubmitting(true);

        try {
            const userReq: UserReq = {
                username: formData.username,
                password: formData.password,
                fullName: formData.fullname,
                email: formData.email,
                gioiTinh: formData.gender,
            };

            const res = await createUser(userReq);
            setNotice("Tạo tài khoản thành công.");
        } catch (error: unknown) {
            const responseMessage = isAxiosError(error) ? error.response?.data : undefined;
            setNotice(
                responseMessage ??
                (error instanceof Error ? error.message : "Không thể tạo tài khoản. Vui lòng thử lại."),
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="mx-auto w-full max-w-xl py-4 sm:py-8">
            <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_24px_70px_-40px_rgba(74,45,24,0.35)]">
                <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-7 sm:px-10 sm:py-9">
                    <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-orange-100 text-orange-700">
                        <i className="fa-solid fa-user-plus text-lg" aria-hidden="true"></i>
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-700">
                        Cộng đồng Fakebook
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
                        Tạo tài khoản
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                        Đăng ký để cùng gia đình lưu giữ những khoảnh khắc đáng nhớ.
                    </p>
                </div>

                <form className="grid gap-5 px-6 py-7 sm:px-10 sm:py-8" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-semibold text-stone-700" htmlFor="fullname">
                            Họ và tên
                        </label>
                        <input
                            autoComplete="name"
                            className={inputClassName}
                            id="fullname"
                            name="fullname"
                            placeholder="Nguyễn Văn An"
                            required
                            value={formData.fullname}
                            onChange={(event) =>
                                setFormData((previous) => ({ ...previous, fullname: event.target.value }))
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-stone-700" htmlFor="username">
                            Tên đăng nhập
                        </label>
                        <input
                            autoComplete="username"
                            className={inputClassName}
                            id="username"
                            name="username"
                            placeholder="Chọn tên đăng nhập"
                            required
                            value={formData.username}
                            onChange={(event) =>
                                setFormData((previous) => ({ ...previous, username: event.target.value }))
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-stone-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            autoComplete="email"
                            className={inputClassName}
                            id="email"
                            name="email"
                            placeholder="ban@example.com"
                            required
                            type="email"
                            value={formData.email}
                            onChange={(event) =>
                                setFormData((previous) => ({ ...previous, email: event.target.value }))
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-stone-700" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            autoComplete="new-password"
                            className={inputClassName}
                            id="password"
                            minLength={7}
                            name="password"
                            placeholder="Tối thiểu 7 ký tự"
                            required
                            type="password"
                            value={formData.password}
                            onChange={(event) =>
                                setFormData((previous) => ({ ...previous, password: event.target.value }))
                            }
                        />
                    </div>

                    <fieldset>
                        <legend className="text-sm font-semibold text-stone-700">Giới tính</legend>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            {[
                                { label: "Nam", value: "male" as const },
                                { label: "Nữ", value: "female" as const },
                                { label: "Khác", value: "other" as const },
                            ].map(({ label, value }) => (
                                <label
                                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-3 text-sm font-medium text-stone-600 transition has-[:checked]:border-orange-300 has-[:checked]:bg-orange-50 has-[:checked]:text-orange-800"
                                    key={value}
                                >
                                    <input
                                        className="accent-orange-600"
                                        name="gender"
                                        required
                                        type="radio"
                                        value={value}
                                        checked={formData.gender === value}
                                        onChange={() =>
                                            setFormData((previous) => ({ ...previous, gender: value }))
                                        }
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    {notice && (
                        <p aria-live="polite" className="rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-800">
                            {notice}
                        </p>
                    )}

                    <button
                        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/15 transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
                        {!isSubmitting && <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>}
                    </button>

                    <p className="text-center text-sm text-stone-500">
                        Đã có tài khoản?{" "}
                        <Link className="font-semibold text-orange-700 hover:text-orange-800" href="/">
                            Đăng nhập
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

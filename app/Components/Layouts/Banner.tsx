import BannerItem from "../Items/BannerItem"

const Banner = () => {
    return (
        <nav aria-label="Điều hướng chính" className="rounded-[22px] border border-stone-200/80 bg-white p-3 shadow-sm shadow-stone-900/[0.03]">
            <p className="px-3 pb-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">Không gian của bạn</p>
            <div className="grid gap-1">
                <BannerItem name="Bảng tin" className="bg-orange-50 font-semibold text-orange-800" classIcon="fa-solid fa-house-chimney" />
                <BannerItem name="Nhật ký gia đình" className="text-stone-600" classIcon="fa-regular fa-bookmark" />
                <BannerItem name="Ảnh & kỷ niệm" className="text-stone-600" classIcon="fa-regular fa-images" />
                <BannerItem name="Bạn bè" className="text-stone-600" classIcon="fa-solid fa-user-group" />
                <BannerItem name="Cài đặt" className="text-stone-600" classIcon="fa-solid fa-sliders" />
            </div>
            <div className="mx-3 my-4 border-t border-stone-100"></div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-4">
                <div className="mb-2 grid size-9 place-items-center rounded-xl bg-white text-orange-600 shadow-sm">
                    <i className="fa-regular fa-heart"></i>
                </div>
                <p className="text-sm font-bold text-stone-800">Lưu giữ điều đáng nhớ</p>
                <p className="mt-1 text-xs leading-relaxed text-stone-500">Mỗi khoảnh khắc bên nhau đều là một câu chuyện đẹp.</p>
            </div>
        </nav>
    )
}

export default Banner
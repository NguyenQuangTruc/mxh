'use client'
import { useState } from "react";

const PostCard = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(11);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    };

    return (
        <article className="mx-auto overflow-hidden rounded-[22px] border border-stone-200/80 bg-white p-4 text-stone-800 shadow-[0_8px_30px_-22px_rgba(41,37,31,0.28)] transition-shadow hover:shadow-[0_12px_34px_-22px_rgba(41,37,31,0.34)] sm:p-5">
            {/* 1. Header: Avatar + Tên + Badge + Thời gian */}
            <header className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                            alt="Trần Lan (Mẹ)"
                            className="size-12 rounded-full border-2 border-orange-100 object-cover"
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-[15px] font-bold leading-tight text-stone-900">
                                Trần Lan (Mẹ)
                            </h2>
                        
                        </div>
                        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-stone-400">
                            <span>5 giờ trước</span>
                            <span>•</span>
                            <span>Nhật ký học tập</span>
                            <span>•</span>
                            <i className="fa-solid fa-lock text-[10px]"></i>
                        </div>
                    </div>
                </div>

                {/* Nút ba chấm */}
                <button
                    type="button"
                    aria-label="Tùy chọn bài viết"
                    className="grid size-9 place-items-center rounded-xl text-stone-400 transition hover:bg-stone-50 hover:text-stone-700"
                >
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </header>

            {/* 2. Nội dung text */}
            <p className="mt-4 text-sm leading-[1.75] text-stone-700 sm:text-[15px]">
                Tin vui chiều thứ Sáu của gia đình mình! Bé Minh hôm nay xuất sắc đạt điểm 10 tuyệt đối bài kiểm tra Toán giữa kỳ và được cô giáo chủ nhiệm khen ngợi trước lớp vì chăm chỉ giúp đỡ bạn bè 🎉🌟 Cả nhà nhớ có lời khen thưởng cho chàng trai nhỏ nhé! Cuối tuần này Bố Mẹ dẫn 2 chị em đi vườn bách thú nha con! ❤️
            </p>

            {/* 3. Hình ảnh đính kèm kèm Tag ghi chú */}
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 sm:aspect-[16/10]">
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                    alt="Bé Minh khoe điểm 10"
                    className="size-full object-cover transition duration-500 hover:scale-[1.02]"
                />
                
            </div>


            

            {/* 6. Footer: Thả tim & Mở bình luận (Theo yêu cầu) */}
            <footer className="mt-4 flex items-center justify-around border-t border-stone-100 pt-3 text-stone-600">
                {/* Nút Thả tim */}
                <button
                    type="button"
                    onClick={toggleLike}
                    className={`flex items-center gap-2 text-sm font-semibold py-1.5 px-4 rounded-xl transition ${isLiked
                            ? 'text-rose-500 hover:bg-rose-50'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                >
                    <i
                        className={`text-lg transition-transform active:scale-125 ${isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
                            }`}
                    ></i>
                    <span>{isLiked ? 'Đã yêu thích' : 'Thả tim'}</span>
                </button>

                {/* Nút xem bình luận */}
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-stone-600 transition hover:bg-stone-50"
                >
                    <i className="fa-regular fa-comment-dots text-lg"></i>
                    <span>Bình luận (4)</span>
                </button>
            </footer>
        </article>
    );
}

export default PostCard
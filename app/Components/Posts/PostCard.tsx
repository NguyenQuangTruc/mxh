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
        <article className="mx-auto bg-white rounded-2xl shadow-sm border border-orange-100/70 p-4 md:p-5 font-sans text-stone-800">
            {/* 1. Header: Avatar + Tên + Badge + Thời gian */}
            <header className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                            alt="Trần Lan (Mẹ)"
                            className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/20"
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-bold text-base text-stone-900 leading-tight">
                                Trần Lan (Mẹ)
                            </h2>
                        
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1">
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
                    className="text-stone-400 hover:text-stone-600 transition p-1"
                >
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </header>

            {/* 2. Nội dung text */}
            <p className="mt-3.5 text-sm md:text-[15px] leading-relaxed text-stone-700">
                Tin vui chiều thứ Sáu của gia đình mình! Bé Minh hôm nay xuất sắc đạt điểm 10 tuyệt đối bài kiểm tra Toán giữa kỳ và được cô giáo chủ nhiệm khen ngợi trước lớp vì chăm chỉ giúp đỡ bạn bè 🎉🌟 Cả nhà nhớ có lời khen thưởng cho chàng trai nhỏ nhé! Cuối tuần này Bố Mẹ dẫn 2 chị em đi vườn bách thú nha con! ❤️
            </p>

            {/* 3. Hình ảnh đính kèm kèm Tag ghi chú */}
            <div className="relative mt-3.5 rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                    alt="Bé Minh khoe điểm 10"
                    className="w-full h-full object-cover"
                />
                
            </div>


            

            {/* 6. Footer: Thả tim & Mở bình luận (Theo yêu cầu) */}
            <footer className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-around text-stone-600">
                {/* Nút Thả tim */}
                <button
                    type="button"
                    onClick={toggleLike}
                    className={`flex items-center gap-2 text-sm font-semibold py-1.5 px-4 rounded-xl transition ${isLiked
                            ? 'text-red-500 hover:bg-red-50'
                            : 'hover:bg-stone-100 text-stone-600'
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
                    className="flex items-center gap-2 text-sm font-semibold py-1.5 px-4 rounded-xl hover:bg-stone-100 text-stone-600 transition"
                >
                    <i className="fa-regular fa-comment-dots text-lg"></i>
                    <span>Bình luận (4)</span>
                </button>
            </footer>
        </article>
    );
}

export default PostCard
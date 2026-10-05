import PostCard from "./Components/Posts/PostCard";

export default function Home() {

  return (
    <>
      <div className="mb-5 px-1 sm:mb-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">Xin chào, gia đình mình</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 sm:text-[28px]">Bảng tin</h1>
        <p className="mt-1 text-sm text-stone-500">Cùng chia sẻ những khoảnh khắc thật đẹp hôm nay.</p>
      </div>
      <div className="grid gap-5 sm:gap-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}

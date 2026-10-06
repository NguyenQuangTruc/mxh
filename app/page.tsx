import PostCard from "./Components/Posts/PostCard";
import Banner from "./Components/Layouts/Banner";

export default function Home() {

  return (
    <div className="mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:py-8 lg:grid-cols-[250px_minmax(0,700px)] lg:gap-8 xl:gap-10">
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <Banner />
        </div>
      </aside>
      <main className="min-w-0">
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
      </main>
    </div>
  );
}

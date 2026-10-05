import BannerItem from "../Items/BannerItem"

const Banner = () => {
    return (
        <div className="bg-amber-100 rounded-xl p-3 grid gap-y-3">
            <BannerItem name="Đây là ITem" className={""} classIcon={"fa-solid fa-right-from-bracket"} />
            <BannerItem name="Đây là ITem" className={""} classIcon={"fa-solid fa-right-from-bracket"} />
            <BannerItem name="Đây là ITem" className={""} classIcon={"fa-solid fa-right-from-bracket"} />
            <BannerItem name="Đây là ITem" className={""} classIcon={"fa-solid fa-right-from-bracket"} />
            <BannerItem name="Đây là ITem" className={""} classIcon={"fa-solid fa-right-from-bracket"} />

        </div>
    )
}

export default Banner

interface PropType {
    className: string;
    classIcon: string;
    name:string;
}
const BannerItem = (props: PropType) => {
    return (
        <div className={`${props.className} flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-orange-50/80`}>
            <i className={`${props.classIcon} w-5 text-center text-base text-orange-500`}></i>
            <span>{props.name}</span>
        </div>
    )
}

export default BannerItem
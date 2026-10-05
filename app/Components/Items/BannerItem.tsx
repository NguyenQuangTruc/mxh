
interface PropType {
    className: string;
    classIcon: string;
    name:string;
}
const BannerItem = (props: PropType) => {
    return (
        <div className={`${props.className} flex gap-3`}>
            <div>
                <i className={`${props.classIcon} text-blue-500`}></i>
            </div>
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default BannerItem
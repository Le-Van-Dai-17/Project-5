export default function(props: {
    text: string 
    className?: string
} ) {
    const {text, className=""} = props;
    return (
        <>
            <div className={"text-[#EFEEE0] font-[700] text-[24px] mb-[20px] capitalize "+className}>
                {text}
            </div>
        </>
    )
}
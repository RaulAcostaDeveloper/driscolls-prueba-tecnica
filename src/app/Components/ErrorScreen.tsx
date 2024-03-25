import Image from "next/image";
type Props = {
    errorName: string;
}
export const ErrorScreen = ({errorName}: Props) => {
    return (
        <div className="ErrorScreen">
            <Image src={'/images/notFound.png'} alt="portada driscolls" width={1000} height={487}/>
            <h3>{errorName}</h3>
        </div>
    )
}
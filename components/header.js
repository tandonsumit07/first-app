import Image from "next/image";
export default function Header(){
    return (
    <>
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width="600" height="600" />
        <h1>Welcome to this NextJS Course!</h1>
    </>
)
}
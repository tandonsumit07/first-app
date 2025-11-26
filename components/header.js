import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return (
    <>
        <Link href='/' >
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width="600" height="600" />
        </Link>
        <h1>Welcome to this NextJS Course!</h1>
    </>
)
}
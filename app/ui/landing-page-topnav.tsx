import Link from "next/link";

export const LandingPageTopNav = async () => {
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <Link href="/">Home</Link>
            </div>
            <div className="flex justify-evenly basis-1/4">
                <Link href="/login">Login</Link>
            </div>
        </div>
    )
}

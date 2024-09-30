import Link from 'next/link';

export default function TopNav() {
    return (
        <div className="flex justify-center">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/account">Account</Link>
        </div>
    );
}


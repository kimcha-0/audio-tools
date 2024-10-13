'use-client'
import Link from 'next/link';
import { createClient } from '@/app/lib/supabase/client';
import { signout } from '@/app/lib/actions';

export default function TopNav() {
    const supabase = createClient();
    const user = supabase.auth.getUser();
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <Link href="/">Home</Link>
            </div>
            <div className="flex justify-evenly basis-1/4">
                <Link href="/login">Login</Link>
                <Link href="/account">Account</Link>
            </div>
        </div>
    )
}

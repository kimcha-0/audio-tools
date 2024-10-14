
import Link from 'next/link';
import { createClient } from '@/app/lib/supabase/server';
import { signout } from '@/app/lib/actions';
import { useEffect } from 'react';

export const TopNav = async () => {
    const supabase = createClient();
    const { data, err } = await supabase.auth.getUser();
    if (!data?.user || err) {
        throw Error();
    }
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <Link href="/">Home</Link>
            </div>
            <div className="flex justify-evenly basis-1/4">
                <Link href="/account">Account</Link>
                <form action="/auth/signout" method="post">
                    <button className="button block" type="submit">
                    Sign out
                    </button>
                </form>
            </div>
        </div>
    )
}

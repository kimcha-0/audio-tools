'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/app/lib/supabase/client'
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';


export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    // useCallback caches fn in between renders
    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name, username, website, avatar_url`)
            .eq('id', user?.id)
            .single()
            console.log('fetching user data');
            if (error && status !== 406) {
                console.log(error)
                throw error
            }
            console.log(`data: ${data}, status: ${status}`);

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            router.push('/login');
            alert(`Error loading user data: ${error}`);
        } finally {
            setLoading(false)
        }
    }, [user, supabase]);

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    const updateProfile = async ({
        username,
        website,
        avatar_url,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) => {
        try {
            setLoading(true)

            const { error, data, status } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert(`Profile updated: ${error}`);
        } catch (error) {
            alert(`Error updating the data: ${error}`);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="form-widget">

        {/* ... */}

        <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
        </div>
        <div>
        <label htmlFor="fullName">Full Name</label>
        <input
        id="fullName"
        type="text"
        value={fullname || ''}
        onChange={(e) => setFullname(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="username">Username</label>
        <input
        id="username"
        type="text"
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="website">Website</label>
        <input
        id="website"
        type="url"
        value={website || ''}
        onChange={(e) => setWebsite(e.target.value)}
        />
        </div>

        <div>
        <button
        className="button primary block"
        onClick={() => updateProfile({ fullname, username, website, avatar_url })}
        disabled={loading}
        >
        {loading ? 'Loading ...' : 'Update'}
        </button>
        </div>

        <div>
        <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
        Sign out
        </button>
        </form>
        </div>
        </div>
    )
}

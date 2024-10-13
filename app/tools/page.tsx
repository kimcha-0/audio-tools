import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ToolPage() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    console.log('toolpage user: ', data);
    console.log('toolpage error: ', error);
    const { sessionData, sessionError } = await supabase.auth.getSession();
    console.log('toolpage session: ', sessionData);
    console.log('toolpage error: ', sessionError)
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
        <div>
            ToolPage
        </div>
    );
}

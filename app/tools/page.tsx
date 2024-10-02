import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ToolPage() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
        <div>
            ToolPage
        </div>
    );
}

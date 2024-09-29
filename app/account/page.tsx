import AccountForm from '@/app/account/account-form';
import { createClient } from '@/app/lib/supabase/server';

export default async function Account() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return <AccountForm user={user} />
}

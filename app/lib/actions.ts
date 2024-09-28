'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/app/lib/supabase/server';

export async function login(formData: FormData) {
    console.log('login');
    const supabase = createClient();
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error)
        redirect('/error');
}

export async function signup() {
    console.log('signup');
    const supabase = createClient();

    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    const { error } = await supabase.ath.signUp(data);

    if (error)
        redirect('/error');
    revalidatePath('/', 'layout');
    redirect('account');
}

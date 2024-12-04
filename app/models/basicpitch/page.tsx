import { UploadButton } from '@/app/ui/tools/basicpitch/upload-form';
import { createClient } from "@/app/lib/supabase/server";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export default async function BasicPitchPage() {
    return (
        <div>
            <UploadButton />
        </div>
    );
}

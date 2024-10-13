<<<<<<< HEAD
import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';

export default function Page() {
=======
import { UploadButton } from '@/app/ui/tools/basicpitch/upload-form';

export default function BasicPitchPage() {
>>>>>>> 15e684e (finished email/pw auth and going to work on site layout)
    return (
        <div>
            <UploadButton />
        </div>
    );
}

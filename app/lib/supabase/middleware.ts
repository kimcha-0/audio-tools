import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export const updateSession = async (request: NextRequest) => {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                function getAll() {
                  return request.cookies.getAll()
                },
                function setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ 
                        name, value 
                    }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({
                        name, value, options
                    }) => supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    );

    // refereshing auth token
    await supabase.auth.getUser();
    return supabaseResponse;
}

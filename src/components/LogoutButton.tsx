'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 w-full py-3 border border-red-500/20 text-red-400/60 text-[13px] font-mono uppercase tracking-widest hover:border-red-500 hover:text-red-400 transition-all"
    >
      Sign Out
    </button>
  );
}

// app/page.tsx
"use client";

import { signInWithFacebook, signInWithGoogle } from "src/config/auth/firebase";
import { useAuth } from "src/config/hooks/useAuth";

export default function HomePage() {
  const { user, logout, loading } = useAuth();

  if (loading) return <p>Түр хүлээнэ үү...</p>;

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4">
        <button onClick={signInWithGoogle} className="btn">
          Google-аар нэвтрэх
        </button>
        <button onClick={signInWithFacebook} className="btn">
          Facebook-аар нэвтрэх
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Тавтай морил, {user.displayName || user.email}</p>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <button onClick={logout}>Гарах</button>
    </div>
  );
}

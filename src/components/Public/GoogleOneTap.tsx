"use client";

import { useCallback, useEffect } from "react";
import { signInWithCredential } from "src/config/auth/firebase";
import { useAuth } from "src/config/hooks/useAuth";

declare global {
  interface Window {
    google: any;
  }
}

export function GoogleOneTap() {
  const { user } = useAuth();

  const handleCredentialResponse = useCallback(async (res: any) => {
    try {
      const credential = res.credential;
      if (credential) {
        await signInWithCredential(credential);
        // Firebase-н auth listener (AuthContext) автоматаар ажиллана
      }
    } catch (err) {
      console.error("Google One Tap login error:", err);
    }
  }, []);

  const initOneTap = useCallback(() => {
    if (!window?.google?.accounts?.id) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_MOTO_GOOGLE_ONETAP_CLIENT_ID!,
      callback: handleCredentialResponse,
      auto_select: false,
      context: "signin",
      ux_mode: "popup",
    });

    window.google.accounts.id.prompt();
  }, [handleCredentialResponse]);

  useEffect(() => {
    if (!user) {
      initOneTap();
    } else {
      window.google?.accounts?.id?.cancel();
    }
  }, [user, initOneTap]);

  return null;
}

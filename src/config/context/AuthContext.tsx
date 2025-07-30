"use client";
import React, { createContext, useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthState, signOut } from "../auth/firebase";
import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";

interface AuthContextValue {
  user: User | null;
  motoUser: any;
  loading: boolean;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  motoUser: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [motoUser, setMotoUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { send } = usePostToMotoApi();

  useEffect(() => {
    return onAuthState(async (firebaseUser: User | null) => {
      setUser(firebaseUser);
      setLoading(false);

      if (firebaseUser) {
        console.log("Firebase user logged in:", firebaseUser);
        // Firebase-аас login хийсэн хэрэглэгчийг backend-тай sync хийнэ
        const result: any = await send(
          {
            firebaseuid: firebaseUser.uid,
            title: firebaseUser.displayName,
            email: firebaseUser.email,
            mainimage: firebaseUser.photoURL,
            mobile: firebaseUser.phoneNumber,
            json: JSON.stringify(firebaseUser.providerData),
          },
          {
            path: "moto-user-v2",
            query: { apicommand: "login" },
            toast: { mute: true },
          }
        );

        setMotoUser(result.data);

        console.log("Backend login result:", result);
      }
    });
  }, []);

  const logout = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, motoUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

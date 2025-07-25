"use client";

import React, { ReactNode } from "react";
import { isEmpty } from "lodash";
import { useAuth } from "src/config/hooks/useAuth";

export default function BlockGuestUser({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { motoUser } = useAuth();
  const [guestView, userView] = React.Children.toArray(children);

  return isEmpty(motoUser) ? <>{guestView}</> : <>{userView}</>;
}

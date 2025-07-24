"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import { isEmpty } from "lodash";
import { useAuth } from "src/config/hooks/useAuth";

export default function OrganismUserAvatar() {
  const { motoUser } = useAuth();
  // console.log("🚀 ~ OrganismUserAvatar ~ motoUser:", motoUser)

  if (isEmpty(motoUser)) return null;

  return (
    <>
      <RenderAtom
        value={motoUser?.mainimage}
        type="image"
        className={`w-auto h-8 object-contain rounded-full`}
        alt="User Avatar"
      />
    </>
  );
}

"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import { useAuth } from "src/config/hooks/useAuth";
import BlockGuestUser from "../Blocks/BlockGuestUser";

export default function OrganismUserAvatar() {
  const { motoUser } = useAuth();

  return (
    <BlockGuestUser>
      <RenderAtom
        value={"mdi:user"}
        type="icon"
        className={`w-auto h-8 object-contain rounded-full`}
      />

      <RenderAtom
        value={motoUser?.mainimage}
        type="image"
        className={`w-auto h-8 object-contain rounded-full`}
        alt="User Avatar"
      />
    </BlockGuestUser>
  );
}

// mdi:user

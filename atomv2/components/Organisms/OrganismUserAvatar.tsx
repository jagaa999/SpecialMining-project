"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import { useAuth } from "src/config/hooks/useAuth";
import BlockGuestUser from "../Blocks/BlockGuestUser";
import { useToggle } from "react-use";
import BlockPopover from "../Blocks/BlockPopover";
import { Menu } from "antd";

export default function OrganismUserAvatar() {
  return (
    <BlockGuestUser>
      <RenderAtom
        value={"mdi:user"}
        type="icon"
        className={`w-auto h-8 object-contain rounded-full`}
      />

      <UserMenu />
    </BlockGuestUser>
  );
}

const UserMenu = () => {
  const { motoUser } = useAuth();
  const [isShowPopover, setIsShowPopover] = useToggle(false);
  return (
    <BlockPopover
      isShowPopover={isShowPopover}
      setIsShowPopover={setIsShowPopover}
      // content={<MotoCustomerMenuPanelV3 />}
      content={
        <>
          <UserMenuList />
        </>
      }
      props={{
        title: `Сайн уу? ${motoUser?.title}`,
        trigger: "click",
      }}>
      <RenderAtom
        value={motoUser?.mainimage}
        type="image"
        className={`w-auto h-8 object-contain rounded-full`}
        alt="User Avatar"
      />
    </BlockPopover>
  );
};

const UserMenuList = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <RenderAtom
          value="Profile"
          type="text"
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        />
        <RenderAtom
          value="Settings"
          type="text"
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        />
        <RenderAtom
          value="Logout"
          type="text"
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        />
        {/* Ant Design Menu */}
        <div className="mt-4">
          <Menu>
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="settings">Settings</Menu.Item>
            <Menu.Item key="logout">Logout</Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

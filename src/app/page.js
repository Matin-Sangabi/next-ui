// "use client"
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-cyan-900 font-semibold text-center text-3xl">
          Test NextUi Components
        </h1>
        <div className="pt-5 w-full flex flex-col items-center gap-y-5">
          <h5 className="text-cyan-700 text-2xl font-semibold">1.Avatar</h5>
          <div className="flex items-center gap-x-4">
            <Avatar name="matin" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </div>
        </div>
        <div className="pt-5 w-full flex flex-col items-center gap-y-5">
          <h5 className="text-cyan-700 text-2xl font-semibold">1.Avatar</h5>
          <div className="flex items-center gap-x-4">
            <Avatar name="matin" />
            <Avatar name="matin" isBordered />
            <Avatar name="matin" isBordered size="lg" />
            <Avatar name="matin" isBordered size="lg" color="danger" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </div>
          <div className="flex items-center gap-x-4">
            <AvatarGroup
              isBordered
              // isDisabled={false}
              max={7}
              // total={10}
              // renderCount={(count) => (
              //  <p className="text-red-300">more + {count} other</p>
              // )}
              isGrid

              // ! renderCount just use in useClient
            >
              <Avatar name="متین" color="primary" />
              <Avatar name="ali" color="secondary" />
              <Avatar name="saman" color="danger" />
              <Avatar name="hosein" color="success" />
              <Avatar name="taghi" color="warning" />
              <Avatar name="ali" color="secondary" />
              <Avatar name="saman" color="danger" />
              <Avatar name="hosein" color="success" />
              <Avatar name="taghi" color="warning" />
            </AvatarGroup>
            <p>Avatar has icon and className attr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

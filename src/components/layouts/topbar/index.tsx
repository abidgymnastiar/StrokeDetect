'use client';

import { signOut, useSession } from 'next-auth/react';
import avatar1 from '@/assets/images/user/avatar-1.png';
import avatar3 from '@/assets/images/user/avatar-3.png';
import avatar5 from '@/assets/images/user/avatar-5.png';
import avatar7 from '@/assets/images/user/avatar-7.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { TbSearch } from 'react-icons/tb';
import SidenavToggle from './SidenavToggle';
import ThemeModeToggle from './ThemeModeToggle';
import {
  LuGem,
  LuHeart,
  LuLogOut,
  LuMail,
  LuMessagesSquare,
  LuSettings,
  LuShoppingBag,
} from 'react-icons/lu';

type Language = {
  src: StaticImageData;
  label: string;
};

type Tab = {
  id: string;
  title: string;
  active?: boolean;
};

type Notification = {
  type: 'follow' | 'comment' | 'purchase' | 'like';
  avatar?: StaticImageData;
  icon?: ReactNode;
  text: ReactNode;
  time: string;
  ago: string;
  comment?: string;
};

type ProfileMenuItem = {
  icon?: ReactNode;
  label?: string;
  href?: string;
  badge?: string;
  divider?: boolean;
  action?: 'signOut';
};

const tabs: Tab[] = [
  { id: 'tabsViewall', title: 'View all', active: true },
  { id: 'tabsMentions', title: 'Mentions' },
  { id: 'tabsFollowers', title: 'Followers' },
  { id: 'tabsInvites', title: 'Invites' },
];

const notifications: Record<string, Notification[]> = {
  tabsViewall: [
    {
      type: 'follow',
      avatar: avatar3,
      text: (
        <>
          <b>@willie_passem</b> followed you
        </>
      ),
      time: 'Wednesday 03:42 PM',
      ago: '4 sec',
    },
    {
      type: 'comment',
      avatar: avatar5,
      text: (
        <>
          <b>@caroline_jessica</b> commented <br />
          on your post
        </>
      ),
      time: 'Wednesday 03:42 PM',
      ago: '15 min',
      comment: 'Amazing! Fast, to the point, professional and really amazing to work with them!!!',
    },
    {
      type: 'purchase',
      icon: <LuShoppingBag className="size-5 text-danger" />,
      text: (
        <>
          Successfully purchased a business plan for <span className="text-danger">$199.99</span>
        </>
      ),
      time: 'Monday 11:26 AM',
      ago: 'yesterday',
    },
    {
      type: 'like',
      avatar: avatar7,
      icon: <LuHeart className="size-3.5 fill-orange-500" />,
      text: (
        <>
          <b>@scott</b> liked your post
        </>
      ),
      time: 'Thursday 06:59 AM',
      ago: '1 Week',
    },
  ],
  tabsMentions: [
    {
      type: 'comment',
      avatar: avatar5,
      text: (
        <>
          <b>@caroline_jessica</b> commented <br />
          on your post
        </>
      ),
      time: 'Wednesday 03:42 PM',
      ago: '15 min',
      comment: 'Amazing! Fast, to the point, professional and really amazing to work with them!!!',
    },
    {
      type: 'like',
      avatar: avatar7,
      icon: <LuHeart className="size-3.5 fill-orange-500" />,
      text: (
        <>
          <b>@scott</b> liked your post
        </>
      ),
      time: 'Thursday 06:59 AM',
      ago: '1 Week',
    },
  ],
  tabsFollowers: [
    {
      type: 'follow',
      avatar: avatar3,
      text: (
        <>
          <b>@willie_passem</b> followed you
        </>
      ),
      time: 'Wednesday 03:42 PM',
      ago: '4 sec',
    },
  ],
  tabsInvites: [
    {
      type: 'purchase',
      icon: <LuShoppingBag className="size-5 text-danger" />,
      text: (
        <>
          Successfully purchased a business plan for <span className="text-danger">$199.99</span>
        </>
      ),
      time: 'Monday 11:26 AM',
      ago: 'yesterday',
    },
  ],
};

const profileMenu: ProfileMenuItem[] = [
  // { icon: <LuMessagesSquare className="size-4" />, label: 'Page Home', href: '/' },
  // { divider: true },
  {
    icon: <LuLogOut className="size-4" />,
    label: 'Sign Out',
    action: 'signOut',
  },
];

const Topbar = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name || 'Admin';
  const userEmail = session?.user?.email || '';

  return (
    <div className="app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200">
      <div className="w-full flex items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <SidenavToggle />
        </div>

        <div className="flex items-center gap-3">
          <ThemeModeToggle />

          <div className="topbar-item">
            <button
              className="btn btn-icon size-8 hover:bg-default-150 rounded-full"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="theme-customization"
              data-hs-overlay="#theme-customization"
            >
              <LuSettings className="size-4.5" />
            </button>
          </div>

          <div className="topbar-item hs-dropdown relative inline-flex">
            <button className="cursor-pointer bg-pink-100 rounded-full">
              <Image
                src={avatar1}
                alt="user"
                className="hs-dropdown-toggle rounded-full size-9.5"
              />
            </button>
            <div className="hs-dropdown-menu min-w-48">
              <div className="p-2">
                <h6 className="mb-2 text-default-500">Welcome {userName}</h6>
                <Link href="#!" className="flex gap-3">
                  <div className="relative inline-block">
                    <Image src={avatar1} alt="user" className="size-12 rounded" />
                    <span className="-top-1 -end-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h6 className="mb-1 text-sm font-semibold text-default-800">{userName}</h6>
                    <p className="text-default-500">{userEmail}</p>
                  </div>
                </Link>
              </div>

              <div className="border-t border-default-200 -mx-2 my-2"></div>

              <div className="flex flex-col gap-y-1">
                {profileMenu.map((item, i) => {
                  if (item.divider) {
                    return (
                      <div key={i} className="border-t border-default-200 -mx-2 my-1"></div>
                    );
                  }

                  const className =
                    'flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded font-medium';

                  if (item.action === 'signOut') {
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className={`${className} w-full text-start`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    );
                  }

                  return (
                    <Link key={i} href={item.href || '#!'} className={className}>
                      {item.icon}
                      {item.label}
                      {item.badge && (
                        <span className="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

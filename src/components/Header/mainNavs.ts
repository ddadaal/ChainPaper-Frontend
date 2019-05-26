import { NavItemProps } from "./NavItemProps";

export const mainNavs = [{
  path: "/",
  iconName: "home",
  text: "主页",
  match: (pathname: string) => pathname === "/",
},  {
  path: "/explore",
  iconName: "line-chart",
  text: "探索",
  match: (pathname: string) => pathname.startsWith("/explore"),
},
];

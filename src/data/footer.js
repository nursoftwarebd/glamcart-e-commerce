import facebook from "../assets/icons/facebook.svg";
import instra from "../assets/icons/instagram.svg";
import linkend from "../assets/icons/linkend.svg";
import twiter from "../assets/icons/twiter.svg";

export const socialLinks = [
  {
    id: 1,
    icon: facebook,
    href: "#",
  },
  {
    id: 2,
    icon: twiter,
    href: "#",
  },
  {
    id: 3,
    icon: linkend,
    href: "#",
  },
  {
    id: 4,
    icon: instra,
    href: "#",
  },
];

export const quickLink = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "about us", href: "/about-us" },
      { label: "contact us", href: "/contact-us" },
      { label: "products", href: "/products" },
      { label: "login", href: "#" },
      { label: "sign up", href: "#" },
    ],
  },
];

export const customerArea = [
  {
    title: "CUSTOMER AREA",
    links: [
      { label: "my account", href: "/my-account" },
      { label: "orders", href: "/orders" },
      { label: "terms", href: "#" },
      { label: "Privacy Policy ", href: "#" },
      { label: "shipping Information", href: "/shipping-details" },
    ],
  },
];

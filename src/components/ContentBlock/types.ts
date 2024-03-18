import { TFunction } from "react-i18next";

export interface ButtonTProps {
  color?: string | undefined;
  title: string;
  action?: 'redirect' | 'scroll';
  target?: string;
}

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: ButtonTProps[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}

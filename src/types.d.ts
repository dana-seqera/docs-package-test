/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/theme-classic" />

// Extend Error constructor to support ES2022 cause option
interface ErrorOptions {
  cause?: unknown;
}

interface ErrorConstructor {
  new(message?: string, options?: ErrorOptions): Error;
  (message?: string, options?: ErrorOptions): Error;
}

// CSS Module declarations
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}

// SVG declarations
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Image declarations
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// Docusaurus theme declarations
declare module '@theme/*' {
  export * from '@docusaurus/theme-classic';
}

declare module '@theme-original/*' {
  export * from '@docusaurus/theme-classic';
}

// Docusaurus internal exports
declare module '@docusaurus/theme-common/internal' {
  export * from '@docusaurus/theme-common';
  
  export function useNavbarMobileSidebar(): any;
  export function useNavbarSecondaryMenu(): any;
  export function useHideableNavbar(hideOnScroll: boolean): any;
  export function useLockBodyScroll(lock?: boolean): void;
  export function splitNavbarItems(items: any[]): any;
  export function useColorMode(): any;
  export function useThemeConfig(): any;
}

declare module '@theme/NavbarItem' {
  export interface Props {
    mobile?: boolean;
    [key: string]: any;
  }
  export default function NavbarItem(props: Props): JSX.Element;
}

// Site-specific imports
declare module '@site/src/components/*' {
  const component: React.ComponentType<any>;
  export default component;
}

declare module '@site/*' {
  const value: any;
  export default value;
}

// Docusaurus preset classic
declare module '@docusaurus/preset-classic' {
  export interface ThemeConfig {
    [key: string]: any;
  }
  export interface Options {
    [key: string]: any;
  }
}
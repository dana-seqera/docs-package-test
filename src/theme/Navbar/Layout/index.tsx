// src/theme/Navbar/Layout/index.tsx
import React from 'react';
import clsx from 'clsx';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';
import styles from './styles.module.css';

// Define proper types for Sun and Moon components
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

// Sun Icon Component
const Sun: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2V6M12 18V22M4 12H2M6 12H4M22 12H20M20 12H18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6.34 6.34L4.93 4.93M19.07 19.07L17.66 17.66M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Moon Icon Component
const Moon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function NavbarBackdrop(props: React.ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

interface ContainerProps {
  children: React.ReactNode;
  isMobile: boolean;
}

function Container({ children, isMobile }: ContainerProps) {
  const navbarSecondaryMenu = (useThemeConfig().navbar as any)?.secondaryMenu;

  if (isMobile) {
    return <div className={clsx(styles.navbarContainer, styles.mobile)}>{children}</div>;
  }

  return (
    <div
      className={clsx(
        styles.navbarContainer,
        navbarSecondaryMenu?.enable && styles.hasSecondaryMenu
      )}
    >
      {children}
    </div>
  );
}

export default function NavbarLayout({ children }: Props) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        }
      )}
    >
      <Container isMobile={false}>
        {children}
        <button
          className={styles.colorModeToggle}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        >
          {colorMode === 'light' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </Container>

      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}

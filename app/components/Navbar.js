"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../data/DataService';

const Navbar = () => {
  const [nameNav, setNameNav] = useState('ACCUEIL');
  const navbarRef = useRef(null);
  const menuNavRef = useRef();
  const [isWantOpenMenu, setIsWantOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.style = "-webkit-box-shadow: 0px 5px 10px 1px #003366; -moz-box-shadow: 0px 5px 10px 1px #003366; filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0, OffY=5, Color='#003366', Positive='true');zoom:1; box-shadow: 0px 5px 10px 1px #003366;";
          navbarRef.current.style.position = 'fixed';
          navbarRef.current.style.top = '0';
          navbarRef.current.style.width = '100%';
          navbarRef.current.style.backgroundColor = 'white';
        } else {
          navbarRef.current.style.position = 'sticky';
          navbarRef.current.style.top = '7px';
          navbarRef.current.style.boxShadow = 'none';
        }
      }
    };

    handleResize(); // Set initial value for isMobile

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isWantOpenMenu) {
      if (menuNavRef.current) {
        menuNavRef.current.style.transform = 'translateX(0vw)';
      }
    } else {
      if (menuNavRef.current) {
        menuNavRef.current.style.transform = isMobile ? 'translateX(200vw)' : 'translateX(0vw)';
      }
    }
  }, [isWantOpenMenu, isMobile]);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsWantOpenMenu(false);
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <div ref={navbarRef} id='Navbar'>
      <div className='logo'>
        <Link href='/' onClick={() => { setNameNav('ACCUEIL'); handleLinkClick(); }}>
          <span>JOEA <b>.</b></span><span>COM</span>
        </Link>
      </div>
      <ul className={isMobile ? 'menu responsive' : 'menu'} ref={menuNavRef}>
        <Link href='/' onClick={() => { setNameNav('ACCUEIL'); handleLinkClick(); }}>
          <li className={pathname === '/' ? 'active' : ''}>ACCUEIL</li>
        </Link>
        <div className='dropdownContainer'>
          <li className={pathname.startsWith('/services') ? 'active dropdownBtn' : 'dropdownBtn'} onClick={handleDropdownToggle}>
            SERVICES <FontAwesomeIcon icon={faChevronDown} />
            {showDropdownMenu && (
              <ul className='dropdownMenu'>
                {DataService.map(item => (
                  <Link href={`/services/${item.id}`} key={item.id} onClick={handleLinkClick}>
                    <li className={pathname === `/services/${item.id}` ? 'active' : ''}>
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        </div>
        <Link href='/blog' onClick={() => { setNameNav('ABOUT'); handleLinkClick(); }}>
          <li className={pathname === '/blog' ? 'active' : ''}>BLOG</li>
        </Link>
        <Link href='/contact' onClick={() => { setNameNav('CONTACT'); handleLinkClick(); }}>
          <li className={pathname === '/contact' ? 'active' : ''}>CONTACT US</li>
        </Link>
      </ul>
      <div>
        
      </div>
      {isMobile && (
        <>
          {isWantOpenMenu ? (
            <FontAwesomeIcon icon={faXmark} className='iconMenu close' onClick={() => setIsWantOpenMenu(false)} />
          ) : (
            <FontAwesomeIcon icon={faBars} className='iconMenu open' onClick={() => setIsWantOpenMenu(true)} />
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;

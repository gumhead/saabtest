import Link from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Search from './partials/Search';
import Language from './partials/Language';
import Backindexbtn from "./partials/Backindexbtn";
// -------- data -------- //
import {
  pages,
  documentionNavigation,
} from 'data/navigation';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, search, language, button, fancy, navOtherClass, stickyBox } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="w-100 d-flex d-none d-lg-block">
        <h3 className="fs-30 mb-0">
          <a href="/">Headlesstest</a>
        </h3>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Headlesstest</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/*  ===================== pages nav item  ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Textdatabase and VA Links" className="nav-link dropdown-toggle" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {pages.map(({ title, children }, i) => (
                      <div key={title + i}>
                        <h6 className="dropdown-header">{title}</h6>
                        <ul className="list-unstyled">{renderLinks(children)}</ul>
                      </div>
                  ))}
                </div>
              </div>
            </li>

            {/* ===================== projects nav item  ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Om Oss / Faq" className="nav-link dropdown-toggle" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {documentionNavigation.map(({ title, children }, i) => (
                    <div key={title + i}>
                      <h6 className="dropdown-header">{title}</h6>
                      <ul className="list-unstyled">{renderLinks(children)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <NextLink title="info@mail.mail" className="link-inverse" href="mailto:info@mail.mail " />
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <h3 className="fs-30 flex-row align-items-center ms-auto mt-5 d-lg-none w-100">
          <a href="/">headlesstest</a>
        </h3>
        <ul className="navbar-nav flex-row align-items-center ms-auto mt-2">
          {/* ============= language dropdwown ============= */}
          {/*{language && <Language />}*/}
          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}
          {/* ============= back button ============= */}
          <li className="d-none d-md-block">
            {Backindexbtn && <Backindexbtn />}
          </li>
          {/* ============= hamburger button for small device ============= */}
          <li className="nav-item w-100 d-flex d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= show search box ============= */}
      {search && <Search />}
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;

import { FC } from 'react';
import Link from 'next/link';
import LinkType from 'types/link';
// -------- custom component -------- //
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- data -------- //
import { pages, documentionNavigation } from 'data/navigation';

const Navigations: FC = () => {
  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  return (
    <ul className="navbar-nav">

      {/*  ===================== pages nav item  ===================== */}
      <li className="nav-item dropdown">
        <DropdownToggleLink title="Pages" className="nav-link dropdown-toggle" />

        <ul className="dropdown-menu">
          {pages.map(({ id, title, children }) => {
            return (
              <li className="dropdown dropdown-submenu dropend" key={id}>
                <DropdownToggleLink title={title} />
                <ul className="dropdown-menu">{renderLinks(children)}</ul>
              </li>
            );
          })}

          <ListItemLink href="/pricing" title="Pricing" linkClassName="dropdown-item" />
        </ul>
      </li>

      {/* ===================== projects nav item  ===================== */}
      <li className="nav-item dropdown">
        <DropdownToggleLink title="Projects" className="nav-link dropdown-toggle" />

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
  );
};

export default Navigations;

import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { FC, Fragment, ReactElement, ReactNode } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import useClipboard from 'hooks/useClipboard';
// -------- data -------- //
const navigations = [
  {
    title: 'Usage',
    id: 'collapse-usage',
    children: [
      { title: 'Get Started', url: '/docs' },
      // { title: 'Forms', url: '#' },
      { title: 'FAQ', url: '/docs/faq' }
    ]
  },
  {
    title: 'meny1',
    id: 'collapse-style',
    children: [
      { title: 'Theme', url: '/docs/styleguide/theme' },
      { title: 'SVG Icons', url: '/docs/styleguide/svg-icons' },
    ]
  },
  {
    title: 'meny2',
    id: 'collapse-elements',
    children: [
      { title: 'Pagination', url: '/docs/elements/pagination' },
    ]
  }
];

// ====================================================
type Links = { title: string; url: string }[];

type DocLayoutProps = {
  children: ReactNode;
  quickAccssLinks?: Links;
  headingColClass?: string;
  descriptionClass?: string;
  pageTitle: string | ReactElement;
  description: string | ReactElement;
};
// ====================================================

const DocLayout: FC<DocLayoutProps> = ({
  pageTitle,
  children,
  description,
  quickAccssLinks,
  descriptionClass = 'lead px-xxl-10',
  headingColClass = 'col-md-9 col-lg-7 col-xl-6 mx-auto'
}) => {
  // used for copy button
  useClipboard();
  const { pathname } = useRouter();

  // render the links
  const renderLinks = (data: Links) => {
    return data.map((item) => (
      <li key={item.title}>
        <NextLink title={item.title} href={item.url} className={pathname === item.url ? 'active' : ''} />
      </li>
    ));
  };

  return (
    <Fragment>
      <PageProgress />

      <div className="content-wrapper">
        {/* ========== header ========== */}
        <header className="wrapper bg-soft-primary">
          <Navbar
              language
              search
          />
        </header>

        {/* ========== page heading ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className={headingColClass}>
                <h1 className="display-1 mb-3">{pageTitle}</h1>
                <p className={descriptionClass}>{description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== main content ========== */}
        <div className="container">
          <div className="row">
            <aside className="col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block">
              {navigations.map(({ id, title, children }) => (
                <div className="widget pb-3" key={id}>
                  <h6 className="widget-title fs-17 mb-2">{title}</h6>
                  <nav id={id}>
                    <ul className="list-unstyled fs-sm lh-sm text-reset">{renderLinks(children)}</ul>
                  </nav>
                </div>
              ))}
            </aside>

            <div className="col-xl-8 order-xl-2">{children}</div>

            {quickAccssLinks && (
              <aside className="col-xl-2 order-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
                <div className="widget">
                  <h6 className="widget-title fs-17 mb-2 ps-xl-5">On this page</h6>
                  <nav className="ps-xl-5" id="sidebar-nav">
                    <ul className="list-unstyled fs-sm lh-sm text-reset">
                      {quickAccssLinks.map((item, i) => (
                        <li key={i}>
                          <ScrollLink smooth spy activeClass="active" to={item.url} className="nav-link scroll">
                            {item.title}
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DocLayout;

import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { FC, Fragment, ReactElement, ReactNode } from 'react';

// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import useClipboard from 'hooks/useClipboard';
import {Footer8} from "../blocks/footer";
import Script from "next/script";


// --------------- Google  Ads ---------------- //


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
            {/*Margin blocker*/}
            <aside className="col-xl-2 sidebar doc-sidebar mt-md-0 py-16 d-none d-xl-block"></aside>
            {/*experimental styling*/}
            <div className="col-xl-9 order-xl-2">
              {/*Dictionary index universal menu*/}
              <div className="dictionary-nav-index-desktop mt-10 d-none d-md-block position-sticky">
                <ul className="nav nav-tabs nav-tabs-basic">
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_A">
                    A
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_B">
                    B
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_C">
                    C
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_D">
                    D
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_E">
                    E
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_F">
                    F
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_G">
                    G
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_H">
                    H
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_I">
                    I
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_J">
                    J
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_K">
                    K
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_L">
                    L
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_M">
                    M
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_N">
                    N
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_O">
                    O
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_P">
                    P
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_Q">
                    Q
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_R">
                    R
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_S">
                    S
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_T">
                    T
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_U">
                    U
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_V">
                    V
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_W">
                    W
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_X">
                    X
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_Y">
                    Y
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_Z">
                    Z
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_aa">
                    Å
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_ae">
                    Ä
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noreferrer" href="/dictionary/alphalist_oe">
                    Ö
                  </a>
                </li>
              </ul>
              </div>
              <div className="accordion accordion-wrapper mt-10 d-md-none" id="accordion">
                <div className="card accordion-item">
                  <div className="card-header" id="faq-6">
                    <button
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapse-6"
                        aria-expanded="false"
                        aria-controls="faq-collapse-6"
                    >
                      Dictionary-Index
                    </button>
                  </div>

                  <div id="faq-collapse-6" className="accordion-collapse collapse" aria-labelledby="faq-6">
                    <div className="card-body">
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_A">
                          A
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_B">
                          B
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_C">
                          C
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_D">
                          D
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_E">
                          E
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_F">
                          F
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_G">
                          G
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_H">
                          H
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_I">
                          I
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_J">
                          J
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_K">
                          K
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_L">
                          L
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_M">
                          M
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_N">
                          N
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_O">
                          O
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_P">
                          P
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_Q">
                          Q
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_R">
                          R
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_S">
                          S
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_T">
                          T
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_U">
                          U
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_V">
                          V
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_W">
                          W
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_X">
                          X
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_Y">
                          Y
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_Z">
                          Z
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_aa">
                          Å
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_ae">
                          Ä
                        </a>
                      </p>
                      <p className="dictionary-index-mobile">
                        <a className="dictionary-index-mobile-entries" rel="noreferrer" href="/dictionary/alphalist_oe">
                          Ö
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="row adverts">
            <aside className="col-xl-2 sticky-sidebar start-100 top-0 mt-md-0 py-16 d-none d-xl-block">
              <Script async
                      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7939257509313966"
                      crossOrigin="anonymous"></Script>
              <script async
                      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7939257509313966"
                      crossOrigin="anonymous"></script>
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-7939257509313966"
                   data-ad-slot="5029017086"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-7939257509313966"
                   data-ad-slot="1649624407"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              <Script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </Script>
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
      <section className="wrapper bg-gray">
        <div>
          <Footer8/>
        </div>
      </section>
    </Fragment>
  );
};

export default DocLayout;

import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
const AboutTwo: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
            language
            search
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-20 pt-md-14 pb-md-5 text-center">
            <div className="row">
              <div className="col-xl-9 mx-auto mb-6">
                <h1 className="display-1 mb-3">
                  Om webbplatsen
                </h1>
                <p className="lead mb-0 py-3">
     TeLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nisi eget risus viverra condimentum sed placerat ligula. Integer euismod in odio sed congue. Nulla id purus ac eros aliquet semper. Nulla pulvinar blandit ante, non scelerisque sem pretium eget. Proin laoreet posuere iaculis. Pellentesque pulvinar nulla gravida arcu tristique viverra. Aenean venenatis nisi vel metus suscipit laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et sollicitudin justo. Suspendisse potenti. Integer in leo imperdiet neque fringilla semper. Duis scelerisque iaculis odio ac molestie. Maecenas bibendum dui dui, non volutpat quam porta eu. Pellentesque sem felis, iaculis a ligula sit amet, tempor volutpat augue. Pellentesque ut nulla ac tellus elementum varius.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== contact section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i5.png"
                    srcSet="/img/illustrations/i5@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5">
                <h3 className="display-4 mb-7">Kontaktuppgifter</h3>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:info@mail.mail " className="link-body">
                        info@mail.mail
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default AboutTwo;

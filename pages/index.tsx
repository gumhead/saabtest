import {Fragment} from 'react';
import type {NextPage} from 'next';
import {slideInDownAnimate} from 'utils/animation';
import PageProgress from 'components/common/PageProgress';
import {Footer8} from "../src/components/blocks/footer";
import { Portfolio8 } from '../src/components/blocks/portfolio';
const Home: NextPage = () => {
    return (
        <Fragment>
            <PageProgress/>

            {/* ========== header section ========== */}
            <header className="wrapper bg-soft-primary">
            </header>

            <main className="content-wrapper">
                {/* ========== hero section ========== */}
                <section className="wrapper bg-gradient-primary">
                    <div className="container pt-10 pt-md-14">
                        <div className="row gx-2 gy-10 align-items-center">
                            <div
                                className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
                                <h1 className="display-1 mb-5 mx-md-10 mx-lg-0">
                                    Headlesstest
                                    <br/>
                                    <span className="typer text-primary text-nowrap">
                                        <p>Lorem Ipsum</p>
                                    </span>
                                </h1>
                                <p className="lead fs-23 mb-7" style={slideInDownAnimate('900ms')}>
                                    Etiam lorem tortor, vestibulum porta erat et, consequat volutpat leo. Integer et magna ac quam semper dignissim sit amet ut purus.
                                </p>

                                <p className="lead fs-19 mb-7">
                                    Nullam vestibulum facilisis est, eget condimentum erat consequat et. Nunc at venenatis dolor, quis malesuada risus. Suspendisse felis nulla, malesuada dapibus molestie in, dictum vel ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id pellentesque enim. Ut gravida ultrices diam, at gravida tellus volutpat nec. Donec sed aliquam sapien. Quisque quis vulputate libero, vel tristique nisl. Sed volutpat diam dui, sit amet porta lectus congue ut. Cras eleifend velit eros, eget rhoncus risus blandit et.
                                </p>

                                <div
                                    className="d-flex justify-content-center justify-content-lg-start mb-4"
                                    style={slideInDownAnimate('1200ms')}
                                >
                                    <a className="btn btn-lg btn-primary me-2 scroll" href="#photogallery">
                                        Galleri
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6 m-auto position-relative">
                                <div className="row g-4">
                                    <div className="col-12 d-flex flex-column ms-auto">
                                        <div className="ms-auto mt-6" style={slideInDownAnimate('900ms')}>
                                            <img
                                                className="img-fluid rounded opacity-80"
                                                src="/img/photos/krognor.png"
                                                srcSet="/img/photos/krognor.png"
                                                alt="Krognor"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row wrapper bg-light pt-18">
                    <div className="overflow-hidden">
                        <div className="row divider mx-n2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                                <path
                                    fill="currentColor"
                                    d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                <div className="container pt-10 pt-md-14">
                    <div className="row gx-2 gy-10 align-items-center">
                        <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
                            <section className="wrapper bg-light">
                                <div id={"photogallery"} className="container pb-11 pb-md-14">
                                    <Portfolio8 />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}
            <section className="wrapper bg-gray">
                <Footer8/>
            </section>
        </Fragment>
    );
};

export default Home;

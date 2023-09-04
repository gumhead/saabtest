import {NextPage} from 'next';
import DictionaryLayout from 'components/layouts/DictionaryLayout';
import {listh} from '../../../src/components/dictionarylist/listh';
import parse from "html-react-parser";
import Link from "next/link";
import urlFetch from "../../../src/components/dictionarylist/urlFetch/urlFetch";

const H: NextPage = () => {
    return (
        <DictionaryLayout pageTitle="Uppslagsverket" description="H">
            {/* ========== section 1 ========== */}
            <section id="snippet-1" className="wrapper">
                {/**/}
                <div className="dictionary-entry">
                    <div className="grid grid-view">
                        <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                            {listh.map(({ name, id, entrytext_synonym, entrytext_subheadline, entrytext_main , relatedlinks }) => (
                                <div id={id.toString()}  className={urlFetch().toString() === id.toString() ? "d-block" : "d-none"} key={id}>
                                    <div className="dictionary-block project item product" key={id}>
                                        <section id="snippet-1" className="wrapper py-4">
                                            <a href="#{id}" className="scroll" />
                                            <div className="dictionary-entry overflow-hidden">
                                                {/* url link id for accessability when coding */}
                                                {/*<div>{urlFetch()}</div>*/}
                                                <p className="h1 mb-3 text-center">{name}</p>
                                                <div className="text-wrap text-xxl-center">
                                                    <p className="text-center h3 text-aqua">{entrytext_synonym}</p>
                                                    <p className="text-center h4 text-leaf font-italic">{entrytext_subheadline}</p>
                                                </div>
                                                <div className="dictionary-main-content text-xxl-start py-4">
                                                    {/* json id for accessability when coding */}
                                                    {/*<p>{id}</p>*/}
                                                    {parse(entrytext_main)}
                                                </div>
                                                <div id={id.toString()} className="related-links py-13">
                                                    <div className="border-top py-3">
                                                        <h3 className="text-capitalize text-xl-start">Relaterade Begrepp: </h3>
                                                        <div className="text-wrap text-aqua">{parse(relatedlinks)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DictionaryLayout>
    );
};

export default H;

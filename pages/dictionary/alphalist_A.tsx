import {NextPage} from 'next';
import DictionaryLayout from 'components/layouts/DictionaryLayout';

import {lista} from "../../src/components/dictionarylist/lista";
import Link from "next/link";
import {useLocation} from "react-router";
const someDynamicUrl = ("/dictionary/entries/A/#");
{/**/}
const alphalist_A: NextPage = (A) => {
    return (
        <DictionaryLayout pageTitle="Uppslagsverket" description="Klicka på en bokstav eller skriv in ett begrepp i sökrutan.">
            <h2 className="mb-3">A:</h2>
            {/* ========== section 1 ========== */}
            <section id="snippet-1" className="wrapper py-4">
                {/**/}
                {lista.map(({ name, id}) => (
                    <div className="letter-index" key={id}>
                        <p className="lead"><Link href={someDynamicUrl + id }>{name}</Link></p>
                    </div>
                ))}
            </section>
        </DictionaryLayout>
    );
};

export default alphalist_A;

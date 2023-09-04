import {NextPage} from 'next';
import DictionaryLayout from 'components/layouts/DictionaryLayout';

import {listr} from "../../src/components/dictionarylist/listr";
import Link from "next/link";
import {useLocation} from "react-router";
const someDynamicUrl = ("/dictionary/entries/R/#");
{/**/}
const alphalist_R: NextPage = (R) => {
    return (
        <DictionaryLayout pageTitle="Uppslagsverket" description="Klicka på en bokstav eller skriv in ett begrepp i sökrutan.">
            <h2 className="mb-3">R:</h2>
            {/* ========== section 1 ========== */}
            <section id="snippet-1" className="wrapper py-4">
                {/**/}
                {listr.map(({ name, id}) => (
                    <div className="letter-index" key={id}>
                        <p className="lead" ><Link href={someDynamicUrl + id }>{name}</Link></p>
                    </div>
                ))}
            </section>
        </DictionaryLayout>
    );
};

export default alphalist_R;

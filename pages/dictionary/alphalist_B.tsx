    import {NextPage} from 'next';
    import DictionaryLayout from 'components/layouts/DictionaryLayout';
    import {listb} from "../../src/components/dictionarylist/listb";
    import Link from "next/link";
    const someDynamicUrl = ("/dictionary/entries/B/#");
    {/**/}
    const alphalist_B: NextPage = (B) => {
        return (
            <DictionaryLayout pageTitle="Uppslagsverket" description="Klicka på en bokstav eller skriv in ett begrepp i sökrutan.">
                <h2 className="mb-3">B:</h2>
                {/* ========== section 1 ========== */}
                <section id="snippet-1" className="wrapper py-4">
                    {/**/}
                    {listb.map(({ name, id}) => (
                        <div className="letter-index" key={id}>
                            <p className="lead" ><Link href={someDynamicUrl + id }>{name}</Link></p>
                        </div>
                    ))}
                </section>
            </DictionaryLayout>
        );
    };

    export default alphalist_B;

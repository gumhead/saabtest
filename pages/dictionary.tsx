import { NextPage } from 'next';
import DictionaryLayout from 'components/layouts/DictionaryLayout';

const FAQ: NextPage = () => {

  return (
    <DictionaryLayout pageTitle="Uppslagsverket" description="Klicka på en bokstav eller skriv in ett begrepp i sökrutan.">
      <section id="snippet-1" className="wrapper py-3">
        <h2 className="mb-3">Uppslagsverk
        </h2>
        <p className="lead mb-5">
          Klicka på en bokstav eller skriv in ett begrepp i sökrutan.</p>
      </section>
    </DictionaryLayout>
  );
};

export default FAQ;

import { NextPage } from 'next';
import useClipboard from 'hooks/useClipboard';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const FAQ: NextPage = () => {
  // copy button for code copy
  useClipboard();

  return (
    <DocLayout pageTitle="FAQ" description="Find answers to some frequently asked questions here.">
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper py-16">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <p className="lead mb-5">
          If you don't see an answer to your question here, please feel free to contact us with the links below:
        </p>
        <div className="accordion accordion-wrapper mt-10" id="accordion">
          <div className="card accordion-item">
            <div className="card-header" id="faq-6">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-6"
                aria-expanded="false"
                aria-controls="faq-collapse-6"
              >
                How to install this project?
              </button>
            </div>

            <div id="faq-collapse-6" className="accordion-collapse collapse" aria-labelledby="faq-6">
              <div className="card-body">
                <p>
                  To start:<code>npm install</code>{' '},
                  then; <code>next build</code>.
                  Last; <code>next</code> to start the project.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-11">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-11"
                aria-expanded="true"
                aria-controls="faq-collapse-11"
              >
                Ytterligare ett sätt att visa en text.
              </button>
            </div>

            <div id="faq-collapse-11" className="accordion-collapse collapse" aria-labelledby="faq-11">
              <div className="card-body">
                <p>Rubrik för kodsnutt eller vad som kan passa.</p>
              </div>

              <div className="code-wrapper">
                <button type="button" className="btn btn-sm btn-white rounded-pill btn-clipboard">
                  Copy
                </button>

                <div className="code-wrapper-inner overflow-hidden">
                  <CodeHighlight language="html">
                    {`såhär gör du en länk: <a href="http://google.com">länktext</a>`}
                  </CodeHighlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default FAQ;

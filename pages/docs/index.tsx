import { NextPage } from 'next';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'Overview', url: 'snippet-1' },
  { title: 'File Structure', url: 'snippet-2' },
  { title: 'Installation', url: 'snippet-3' }
];

const Documentation: NextPage = () => {
  return (
    <DocLayout
      pageTitle="Get Started"
      quickAccssLinks={quickAccess}
      description="desc"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Overview</h2>
        <div className="card">
          <div className="card-body">
            <p>
             text
            </p>

            <div className="card bg-soft-blue shadow-lg card-border-start border-soft-blue text-navy mt-10">
              <div className="card-body">
                <p>
                  <strong>text.</strong>
                </p>

                <ul className="unordered-list mb-0">
                  <li>text</li>
                  <li>
                   textext
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">File Structure</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li>
                <code className="folder bg-pale-primary">pages</code> All pages exist inside this folder.{' '}
                <strong>Use this folder</strong> if you want to create new page or edit any page.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">Installation</h2>

        <div className="card">
          <div className="card-body">
            <ol className="mb-0">
            </ol>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Documentation;

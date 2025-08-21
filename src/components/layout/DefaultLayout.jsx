import Footer from "../common/Footer";
import Header from "../common/Header";

export default function DefaultLayout({ children }) {

  return (
    <div className="page">
      <header className="app-header">
        <div className="container">
          <Header />
        </div>
      </header>

      <main className="container">
        <section className="content">{children}</section>
      </main>

      <footer className="app-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );

}

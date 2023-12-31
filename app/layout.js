import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import "@styles/global.css";

export const metadata = {
  title: "Alphaden E and  P",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="app">{children} </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

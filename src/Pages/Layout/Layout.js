import { Outlet } from "react-router-dom";
import Header from '../../Components/Header/Header';
import './Layout.css';

const Layout = () => {
  return (
    <div className="content">
        <header>
            <Header></Header>
        </header>
        <section className="section">
            <Outlet />
        </section>
        <footer></footer>
    </div>
  )
};

export default Layout;
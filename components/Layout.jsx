import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;

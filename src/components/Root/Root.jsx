import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import BookDetails from "../BookDetails/BookDetails";


const Root = () => {
    return (
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
        <Banner></Banner>
        <div><BookDetails></BookDetails></div>
      </div>
    );
};

export default Root;
import NavBar from "../navbar/Navbar";
import ProductList from "../product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}
export default Home;
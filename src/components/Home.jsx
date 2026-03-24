import Compofive from "./Compofive";
import Compofour from "./Compofour";
import Compoone from "./Compoone";
import Composeven from "./Composeven";
import Composex from "./Composex";
import Compothree from "./Compothree";
import Compotwo from "./Compotwo";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Compoone/>
      <div className="bg-gray-200">
      <Compotwo/>
      <Compothree/>
      <Compofour/>
      <Compofive/>
      <Composex/>
      <Composeven/>
      </div>
      <Footer/>
    </div>
  )
}

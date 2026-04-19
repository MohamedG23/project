import Compofive from "../components/Compofive";
import Compofour from "../components/Compofour";
import Compoone from "../components/Compoone";
import Composeven from "../components/Composeven";
import Composex from "../components/Composex";
import Compothree from "../components/Compothree";
import Compotwo from "../components/Compotwo";
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

    </div>
  )
}

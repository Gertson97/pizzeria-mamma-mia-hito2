import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <main>
      <Header />

      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="/napolitana.jpg"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="/espanola.jpg"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="/Pepperoni.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

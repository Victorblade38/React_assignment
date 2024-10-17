import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import getData from "./index";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const cardsData = data["results"];
        setData(cardsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const card = e.target.value.trim().toLowerCase();
    setSearchTerm(card);

    if (card === "") {
      return;
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-start">
      <div className="p-10 flex flex-col gap-4 mt-20">
        <div className="flex flex-row justify-between gap-4">
          <h1 className="text-white font-bold text-4xl">Pokemon cards</h1>
          <input
            type="text"
            placeholder="Enter the Pokémon name"
            className="p-4 w-96 rounded-md focus:outline-none font-semibold"
            onChange={handleSearch} // Call handleSearch directly
          />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Cards key={index} name={item.name} />
            ))
          ) : (
            <p className="text-white">No Pokémon found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

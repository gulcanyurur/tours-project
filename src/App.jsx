import { useEffect, useState } from "react";
import Loading from "./Loading";


const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Turları API'den çekme
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // Silme fonksiyonu (Not Interested butonuna basılınca)
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Sayfa ilk yüklendiğinde verileri çek
  useEffect(() => {
    fetchTours();
  }, []);

  // Yüklenme ekranı
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Eğer hiç tur kalmadıysa
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  // Turların gösterildiği kısım
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;

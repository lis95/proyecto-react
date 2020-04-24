import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState([]);
  console.log(video)

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    .then( response => response.json(), console.log(res))
    .then(data => setVideos(data));
  }, [])
  return (
  <div className="App">
    <Header />
    <Search />
    {videos.mylist.length > 0 &&
      <Categories title="Mi Lista">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
    }

    <Categories title="Tendencias">
      <Carousel>
      {videos.trends.map(item =>
        <CarouselItem key={item.id} {...item} />
      )};
      </Carousel>
    </Categories>

    <Categories title="Recomendaciones">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);
}
export default App;

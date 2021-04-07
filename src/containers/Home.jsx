import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initalState = useInitialState(API);
  return initalState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      { initalState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          { initalState.trends?.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          { initalState.originals?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;

import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ObjectList, Hero} from '../components/Home';
import {
  getLatestArtworks,
  getOnViewArtworks,
  getFemaleArtistArtworks,
} from '../actions/artworks';
import {MainNav, Footer} from '../components';
import Slider from '../components/Slider';
import {getDepartments} from '../actions/departments';

const Home = () => {
  const {push} = useHistory();
  const [latestArtworks, setLatestArtworks] = useState([]);
  const [onViewArtworks, setOnViewArtworks] = useState([]);
  const [femaleArtistArtworks, setFemaleArtistArtworks] = useState([]);
  const [departments, setDepartments] = useState([]);

  const getArtworks = async () => {
    await getLatestArtworks(setLatestArtworks);
    await getOnViewArtworks(setOnViewArtworks);
    await getFemaleArtistArtworks(setFemaleArtistArtworks);
  };

  useEffect(() => {
    getArtworks();
    setDepartments(getDepartments());
  }, []);

  const categoryClicked = (e, categoryId) => {
    e.preventDefault();
    push(`/artworks?category=${categoryId}`);
  };
  return (
    <>
      <MainNav page="home" />
      <Hero />
      <div className="bg-add-back-img-2 bg-cover">
        <Slider
          departments={departments}
          itemClick={categoryClicked}
          className="max-w-screen-2xl mx-auto pt-0 pb-2 mb-16 px-4 md:px-20 font-bold bg-cover"
          title="Departamentos"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <ObjectList
          title="Arte por artistas femeninas"
          seeMore="/artworks"
          items={femaleArtistArtworks}
        />
        <ObjectList
          title="En exhibición"
          seeMore="/artworks"
          items={onViewArtworks}
        />
        <ObjectList
          title="Obras nuevas"
          seeMore="/artworks"
          items={latestArtworks}
        />
      </div>
      <Footer showButtons={true}/>
    </>
  );
};

export default Home;

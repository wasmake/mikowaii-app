import React, { useState, useEffect } from 'react';

import Slider from '../components/ShowSlider';

import '../assets/css/all.css';

import axios from 'axios';

const List: React.FC = () => {
  const [stext, setstext] = useState("");
  const [open, setOpen] = React.useState(false);

  const [result, setresult] = useState([{}]);

  const [topAiring, setTopAiring] = useState([{}]);

  const search = (event) => {
    setstext(event.target.value.toLowerCase());
  }

  const show = () => {
    console.log('Fetching animes');
    axios
      .get(`https://kitsu.io/api/edge/trending/anime`)
      .then((res) => {
        console.log(res.data.data);
        let animes = [];
        for (let anime of res.data.data) {
          let data = {
            id: anime.id,
            image: anime.attributes.posterImage.medium,
            imageBg: anime.attributes.coverImage.large,
            rating: parseFloat(anime.attributes.averageRating),
            title: anime.attributes.titles["en_jp"],
            synopsis: anime.attributes.synopsis,
            titles: {
              en: anime.attributes.titles["en"],
              en_jp: anime.attributes.titles["en_jp"],
              ja_jp: anime.attributes.titles["ja_jp"]
            }
          }
          animes.push(data);
        }
        setresult(animes);
      })
      .catch((error) => setOpen(true));
  };

  const loadTopAiring = () => {
    console.log("Top airing");
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/airing`)
      .then(async (res) => {
        let animes = [];
        for (let anime of res.data.top.slice(0, 12)) {
          console.log(anime);
          let animeName = anime.title;
          let episodes = anime.episodes;
          let rating = anime.score;
          let payload = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`);
          if(!payload) console.log("EERRRORRR", animeName);
          let animeData = payload.data.data;
          if (Array.isArray(animeData)) animeData = animeData[0];
          let data = {
            id: animeData.id,
            image:  animeData.attributes.coverImage ? animeData.attributes.posterImage.medium : anime.image_url,
            imageBg: animeData.attributes.coverImage ? animeData.attributes.coverImage.large : anime.image_url,
            rating: parseFloat(rating),
            title: animeName,
            synopsis: animeData.attributes.synopsis,
            titles: {
              en: animeData.attributes.titles["en"],
              en_jp: animeData.attributes.titles["en_jp"],
              ja_jp: animeData.attributes.titles["ja_jp"]
            }
          }
          animes.push(data);
        }
        setTopAiring(animes);

      })
  }

  const showSearch = () => {
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${stext}`)
      .then((res) => {
        setresult(res.data.data);
      })
      .catch((error) => setOpen(true));
  };

  useEffect(() => {
    show();
    loadTopAiring();
  }, [])

  return (
    <div>
      <div className="category-name">
        <h1 className="category-slider">Trending now</h1>
        </div>
      <Slider>
        {result.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
        ))}
      </Slider>
      <div className="category-name">
        <h1 className="category-slider">Top airing</h1>
      </div>
      <Slider>
        {topAiring.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
        ))}
      </Slider>

    </div>
  );

}

export default List;
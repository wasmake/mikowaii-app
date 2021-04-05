import React from 'react';
import IconCross from '../Icons/IconCross';
import './Content.scss';

const Content = ({ movie, onClose }) => (
  <>
    <div className="card-bg" onClick={onClose}></div>
    <div className="card">
      <img src={movie.image} alt="" />
      <div className="overlay no-flick">
      </div>
    </div>
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'backgroundImage': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
          <div className="content__title">
            <h1>{movie.title}</h1>
            <p><i class="fas fa-star"></i> {movie.rating}</p>
          </div>
        <div className="content__description">
          {movie.synopsis}
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
    </div>
    </>
);

export default Content;
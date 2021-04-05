import React from 'react'
import './SliderWrapper.scss'
import cx from 'classnames';

const SliderWrapper = ({ children, currentSlide }) => (
  <div className={cx('slider-wrapper', { 'slider-wrapper--open': currentSlide != null })}>
    {children}
  </div>
);

export default SliderWrapper;

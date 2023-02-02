import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image}
        alt="news_img"
      />
      <p className='title'>{props.title}</p>
      <p className='description'>
        {props.desc}
        <a href="">Read more</a>
      </p>
    </div>
  );
}

export default Card
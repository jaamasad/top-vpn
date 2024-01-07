import React from "react";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
const Card = ({ vpn, vpn_index }) => {
  const {
    name,
    link,
    description,
    benefits,
    platforms,
    rating,
    price,
    discountPrice,
  } = vpn;

  return (
    <div className='container'>
      <div
        id={`list-id-${name}`}
        rel="noopener noreferrer nofollow"
        className="d-block no-gutters mb-4 pl-3 pr-3 pt-4 pb-4 list list-1 lpm-1"
        data-id={name}
      >
        <div className="row">
          <div className="discount discount-new">
            <div className="discount-text">Save {Math.round((1 - discountPrice / price) * 100)}%</div>
            <div className="treangle-bg"></div>
          </div>
          <div className="col-auto text-center align-center d-none d-lg-flex flex-column justify-content-center">
            <div className="arating">{vpn_index + 1}</div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-12 col-md-3 text-center logo-holder align-center d-flex flex-column justify-content-center">
                <img
                  alt={name}
                  className="img-fluid w-100 m-auto max-240"
                  src={`/images/logo/${name.toLowerCase().replace(/\s/g, '_')}.png`}
                  title={name}
                />
              </div>
              <div className="col-12 col-md-5 features-holder mt-3 mt-md-0 mb-0 text-left">
                <p className="no-margin no-padding"></p>
                <ul className="features features-tick">
                  {benefits.map((benefit, index) => (
                    <li key={index} className={`feature-${index}`}>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 d-flex">
                  <span className="available-on-text">Available on:</span>
                  {platforms.map((platform, index) => (
                    <img
                      key={index}
                      data-toggle="tooltip"
                      data-original-title={platform}
                      src={`/images/${platform.toLowerCase().replace(/\s/g, '_')}.svg`}
                      alt={platform}
                      className="os-icons-small"
                    />
                  ))}
                </div>
              </div>
              <div className="col-6 col-md-2 rating-info-holder d-flex flex-column justify-content-center align-items-center text-center mt-3 mt-md-0">
                <div className="d-score relative">
                  {rating}
                </div>
                <div className="d-rating">
                  <span>Best Overall</span>
                </div>
                <ReactStars
                  count={10}
                  edit={false}
                  value={rating}
                  isHalf={true}
                  activeColor="#ffd700"
                />
              </div>
              <div className="col-6 col-md-2 price-holder d-flex flex-column justify-content-center align-items-center text-center mt-3 mt-md-0">
                <div className="mb-3 prices">
                  <span className="mb-2 old-price">{`US$${price.toFixed(2)}`}</span>
                  <br />
                  <span className="price">
                    <span className="font-12">From</span>
                    {`US$${discountPrice.toFixed(2)}`}
                  </span>
                </div>
                <a
                  href={`/vpn/${vpn.name.toLowerCase().replace(/\s/g, '-')}`}
                  data-id={name}
                  className="wave-btn wave-more-btn">
                  More Details
                </a>
                <a href={link} target="_blank" className="wave-btn">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

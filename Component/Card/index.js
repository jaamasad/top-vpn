import React from "react";
import Link from "next/link";
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
      <Link
        id={`list-id-${name}`}
        rel="noopener noreferrer nofollow"
        className="d-block no-gutters mb-4 pl-3 pr-3 pt-4 pb-4 list list-1 lpm-1"
        data-id={name}
        href={`/vpn/${vpn.name.toLowerCase().replace(/\s/g, '-')}`}
      >
        <div className="row">
          <div className="discount discount-new">
            <div className="discount-text">Save {Math.round((1 - discountPrice / price) * 100)}%</div>
            <div className="treangle-bg"></div>
          </div>
          <div className="col-auto text-center align-center d-none d-lg-flex flex-column justify-content-center">
            <div className="arating">{vpn_index+1}</div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-12 col-md-3 text-center logo-holder align-center d-flex flex-column justify-content-center">
                <img
                  alt={name}
                  className="img-fluid w-100 m-auto max-240"
                  src={`/images/${name.toLowerCase().replace(/\s/g, '_')}_logo.png`}
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
                      src={`/images/${platform.toLowerCase()}.svg`}
                      alt={platform}
                      className="os-icons-small"
                    />
                  ))}
                </div>
              </div>
              <div className="col-6 col-md-2 rating-info-holder d-flex flex-column justify-content-center align-items-center text-center mt-3 mt-md-0">
                <div className="d-score relative">
                  <span className="d-progress" style={{width:`${rating*10}%`}} />
                  {rating}
                </div>
                <div className="d-rating">
                  <span>Best Overall</span>
                </div>
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
                <div className="btn btn-visit margin-0-auto pulse">Visit Website</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

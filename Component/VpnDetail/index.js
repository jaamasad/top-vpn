// VpnDetail.js (Redesigned Version)
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";

const VpnDetail = ({ vpnData }) => {
  const {
    name,
    link,
    description,
    detailed_description,
    benefits,
    platforms,
    countries_supported,
    number_of_connections,
    price,
    streaming_optimized_servers,
    rating,
    user_reviews,
    speed_test_results,
    security_audits,
    comparison_data,
    interactive_map,
    trial_experiences,
    unique_features,
    device_compatibility_matrix,
    customer_support_ratings,
    data_retention_policy,
    security_protocol_details,
    vpn_usage_tips,
    industry_news_updates,
    community_forum,
    educational_resources,
  } = vpnData;

  // User Reviews settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="mx-auto mt-8">
      {/* VPN Name and Description */}
      <div className="text-center text-white hero-section">
        <h1 className="text-6xl font-semibold display-1 mb-4">{name}</h1>
        <p className="text-gray-600">{description}</p>
        <a class="effect effect-5" href={link} title="Learn More">Visit VPN Website</a>
      </div>

      {/* Detailed Description */}
      <div className="mt-8 dd-section">
        <p className="text-gray-600">{detailed_description}</p>
        <img src='/images/vpn-img.jpg' />
      </div>

      {/* Key Benefits */}
      <div className="mt-8 benifits-section">
        <h2 className="text-2xl font-semibold pt-2 yellow text-center mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Supported Platforms */}
      <div className="mt-8 plateform-section">
        <h2 className="text-2xl font-semibold yellow text-center mb-4">Supported Platforms</h2>
        <div className="os-img">
          {platforms.map((platform, index) => (
            <img key={index} src={`/images/${platform.toLowerCase().replace(/\s/g, '_')}.svg`} />
          ))}
        </div>
      </div>


      <div className='price-section'>
        {/* Streaming Optimized Servers */}
        <div className="mt-8 optimized">
          <h2 className="text-2xl font-semibold mb-4">Streaming Optimized Servers?</h2>
          {streaming_optimized_servers ? <img src='/images/check.webp' /> : <img src='/images/cross.png' />}
        </div>
        {/* Pricing Details */}
        <div className="mt-8 discounts">
          <h2 className="text-2xl font-semibold yellow mb-4">Discount</h2>
          <div className="mb-3 prices">
            <span className="mb-2 old-price">{`US$${price.monthly}`}</span>
            <br />
            <span className="price">
              <span className="font-12">From</span>
              {`US$${price.discounted}`}
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='features-section'>
        <div className="mt-8 features-item">
          <img src='/images/country.png' />
          <div>
            <h2 className="text-2xl font-semibold">Countries</h2>
            <p className="text-gray-600">{countries_supported}</p>
          </div>
        </div>
        <div className="mt-8 features-item">
          <img src='/images/rating.png' />
          <div>
            <h2 className="text-2xl font-semibold">Rating</h2>
            <p className="text-gray-600">{rating}</p>
          </div>
        </div>
        <div className="mt-8 features-item">
          <img src='/images/connections.png' />
          <div>
            <h3 className="text-2xl font-semibold">Connections</h3>
            <p className="text-gray-600">{number_of_connections}</p>
          </div>
        </div>
      </div>

      {/* User Reviews Section with Slider */}
      <div className="mt-8 text-center review-section">
        <h2 className="text-2xl font-semibold yellow mb-4">User Reviews</h2>
        <Slider {...sliderSettings} className="mx-auto max-w-lg">
          {user_reviews.map((review, index) => (
            <div key={index} className="flex flex-col text-white items-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                {/* Assuming rating is out of 10 */}
                <span className="text-4xl font-semibold slider-rating">
                  {review.rating}
                  <ReactStars
                    count={10}
                    edit={false}
                    value={review.rating}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </span>

              </div>
              <p className="text-gray-600 text-lg">"{review.comment}"</p>
              <div className='d-flex align-items-center justify-content-center'>
                <img className='width-32' src='/images/user.png' />
                <p className="text-gray-500 mt-2 text-sm">- {review.user}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VpnDetail;

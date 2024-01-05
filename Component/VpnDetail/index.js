// VpnDetail.js (Redesigned Version)
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="container mx-auto mt-8 p-4">
      {/* VPN Name and Description */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">{name}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Detailed Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Detailed Description</h2>
        <p className="text-gray-600">{detailed_description}</p>
      </div>

      {/* Key Benefits */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Supported Platforms */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Supported Platforms</h2>
        <ul className="list-disc list-inside text-gray-600">
          {platforms.map((platform, index) => (
            <li key={index}>{platform}</li>
          ))}
        </ul>
      </div>

      {/* Pricing Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <p className="text-gray-600">
          Monthly: ${price.monthly} | Discounted: ${price.discounted}
        </p>
      </div>

      {/* Streaming Optimized Servers */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Streaming Optimized Servers</h2>
        <p className="text-gray-600">{streaming_optimized_servers ? 'Yes' : 'No'}</p>
      </div>

      {/* Rating */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Rating</h2>
        <p className="text-gray-600">Overall Rating: {rating}</p>
      </div>

      {/* User Reviews Section with Slider */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
        <Slider {...sliderSettings} className="mx-auto max-w-lg">
          {user_reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                {/* Assuming rating is out of 10 */}
                <span className="text-4xl font-semibold">{review.rating}</span>
              </div>
              <p className="text-gray-600 text-lg">{review.comment}</p>
              <p className="text-gray-500 mt-2 text-sm">- {review.user}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Speed Test Results */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Speed Test Results</h2>
        {/* ... (Render speed test results based on your design) */}
      </div>

      {/* Security Audits */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Security Audits</h2>
        {/* ... (Render security audits based on your design) */}
      </div>

      {/* Device Compatibility Matrix */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Device Compatibility Matrix</h2>
        {/* ... (Render device compatibility matrix based on your design) */}
      </div>

      {/* Customer Support Ratings */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Support Ratings</h2>
        {/* ... (Render customer support ratings based on your design) */}
      </div>

      {/* ... (Remaining sections based on your data structure) */}
    </div>
  );
};

export default VpnDetail;

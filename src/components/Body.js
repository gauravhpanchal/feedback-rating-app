import React from "react";
import bagpack from "../images/bagpack.jpg";
import Star from "./Star";
import { Link, useOutletContext } from "react-router-dom";

const Body = () => {
  const { reviews } = useOutletContext();
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  const roundedRating = Math.round(averageRating);
  return (
    <div className="flex flex-col w-full md:w-1/2 mx-auto mt-10">
      <div className="mx-auto w-80  rounded-xl hover:ring-8 hover:ring-slate-100 hover:bg-slate-100">
        <img src={bagpack} alt="bagpack" className="w-80 h-auto rounded-xl" />
        <h2 className="text-xl text-center font-medium mt-1 pb-4">
          Beige and ebony GG Supreme canvas backpack
        </h2>
      </div>
      <div className="text-center w-48 mx-auto">
        <h1 className="text-4xl text-center font-bold mt-10">Reviews</h1>
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} filled={i < roundedRating} />
          ))}
        </div>
        <div className="flex text-gray-600 justify-around text-sm font-bold">
          <p>{Math.ceil(averageRating.toFixed(1))} Stars</p>
          <p>
            {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
          </p>
        </div>
      </div>
      <Link
        to="/review"
        className="mt-10 border px-10 py-3 md:w-1/2 mx-auto text-center font-medium rounded-lg hover:bg-black hover:text-white"
      >
        WRITE A REVIEW
      </Link>
      <div className="mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="flex gap-1 mb-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <h3 className="font-semibold text-gray-700 text-base">
                {review.username}
              </h3>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} filled={i < review.rating} />
              ))}
            </div>
            <h3 className="font-semibold text-xl mt-4">{review.title}</h3>
            <p className="font-medium text-lg text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

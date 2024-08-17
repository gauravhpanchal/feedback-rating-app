import React from "react";
import bagpack from "../images/bagpack.jpg";
import Star from "./Star";
import { useNavigate, useOutletContext } from "react-router-dom";

const Review = () => {
  const { reviews, setReviews } = useOutletContext();
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [title, setTitle] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newReview = { rating, review, title };
    setReviews([...reviews, newReview]);
    navigate("/");
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:w-1/2 mx-auto ">
        <div className=" p-4 md:p-0 md:mt-4">
          <h1 className="md:text-4xl mt-6 text-3xl font-bold">
            Write a Review
          </h1>
          <p className="md:mt-4 mt-2">
            Your feedback will help other shoppers make good choices, and we'll
            use it to improve our products.
          </p>
          <p className="underline">Review guidelines</p>
        </div>
        <div className="md:m-0 m-4">
          <img
            src={bagpack}
            alt="bagpack"
            className="md:size-32 md:mt-10 mx-auto rounded-xl"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col md:w-1/2 mx-auto ">
        <h1 className="text-2xl font-semibold">Ratings *</h1>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              filled={i < rating}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
        <h1 className="text-2xl mt-6 font-semibold">Username *</h1>
        <input
          type="text"
          className="border p-2 rounded-md mt-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1 className="text-2xl mt-6 font-semibold">Review *</h1>
        <textarea
          name="review"
          className="border rounded-xl mt-4 p-3"
          id="review"
          cols="60"
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <p className="text-slate-500">
          Describe what you liked, what you did't liked and other key things
          shoppers should know. The most helpful reviews are 200 characters
        </p>

        <button
          onClick={handleSubmit}
          className="w-full border rounded-lg bg-blue-500 text-white text-xl py-3 mt-4"
        >
          Submit Your Review
        </button>
      </div>
    </>
  );
};

export default Review;

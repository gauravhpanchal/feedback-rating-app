import React, { useState } from "react";
import bagpack from "../images/bagpack.jpg";
import Star from "./Star";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const Review = () => {
  const { reviews, setReviews } = useOutletContext();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (!rating) {
      setRatingError("Please select a rating.");
      valid = false;
    } else {
      setRatingError("");
    }

    if (!title) {
      setTitleError("Please enter your title.");
      valid = false;
    } else {
      setTitleError("");
    }

    if (!username) {
      setUsernameError("Please enter your username.");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!review) {
      setReviewError("Please enter your review.");
      valid = false;
    } else {
      setReviewError("");
    }

    if(!valid){
      toast.error("Please fill all the required fields.");
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newReview = { rating, review, title, username };
      setReviews([newReview,...reviews]);
      toast.success("Review submitted successfully!");
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:w-1/2 mx-auto ">
        <div className="p-4 md:p-0 md:mt-4">
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
          {/* {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              filled={i < rating}
              onClick={() => setRating(i + 1)}
            />
          ))} */}
          {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            filled={i < (hoverRating || rating)}
            onClick={() => setRating(i + 1)}
            onHover={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
          />
        ))}
        </div>
        {ratingError && <p className="text-red-500 mt-2">{ratingError}</p>}

        <h1 className="text-2xl mt-6 font-semibold">Username *</h1>
        <input
          type="text"
          className="border p-2 rounded-md mt-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="text-red-500 mt-2">{usernameError}</p>}

        <h1 className="text-2xl mt-6 font-semibold">Review Title *</h1>
        <input
          type="text"
          className="border p-2 rounded-md mt-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="text-red-500 mt-2">{titleError}</p>}

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
        {reviewError && <p className="text-red-500 mt-2">{reviewError}</p>}

        <p className="text-slate-500 mt-2">
          Describe what you liked, what you didn't like, and other key things
          shoppers should know. The most helpful reviews are 200 characters or
          more.
        </p>

        <button
          onClick={handleSubmit}
          className="w-full border rounded-lg mb-10 bg-blue-600 hover:bg-blue-700 shadow-md text-white text-xl py-3 mt-4"
        >
          Submit Your Review
        </button>
      </div>
    </>
  );
};

export default Review;

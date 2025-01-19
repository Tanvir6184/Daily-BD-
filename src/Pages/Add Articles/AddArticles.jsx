import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const AddArticles = () => {
  // const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
  // const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

  const options = [
    { value: "News", label: "News" },
    { value: "Sports", label: "Sports" },
    { value: "Politics", label: "Politics" },
    { value: "International News", label: "International News" },
    { value: "Local News", label: "Local News" },
    { value: "Current Affairs", label: "Current Affairs" },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", {
      ...data,
      tags: data.tags?.map((tag) => tag.value),
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Add Articles</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        {/* Title */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Image File */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-gray-700 font-medium mb-1">
            Image File
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full h-10"
          />
          {/* <input
            type="text"
            {...register("image_file", { required: "Image file is required" })}
            className="w-full border border-gray-300 rounded-md p-2"
          /> */}
          {errors.image_file && (
            <p className="text-red-500 text-sm mt-1">
              {errors.image_file.message}
            </p>
          )}
        </div>

        {/* Publisher */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-gray-700 font-medium mb-1">
            Publisher
          </label>
          <input
            type="text"
            {...register("publisher", { required: "Publisher is required" })}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.publisher && (
            <p className="text-red-500 text-sm mt-1">
              {errors.publisher.message}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-gray-700 font-medium mb-1">Tags</label>
          <Controller
            name="tags"
            control={control}
            rules={{ required: "Please select at least one tag" }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                isMulti
                placeholder="Select tags"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            )}
          />
          {errors.tags && (
            <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;

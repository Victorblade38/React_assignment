import React from "react";

const Cards = ({ name }) => {
  return (
    <div className="flex flex-col gap-2 items-center bg-white p-2  w-48 rounded-md">
      <img src="https://picsum.photos/200" className="rounded-t-md" />
      <p className="font-semibold text-2xl">{name}</p>
    </div>
  );
};

export default Cards;

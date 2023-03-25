import React, { useContext } from "react";
import { Table } from "flowbite-react";
import { Context } from "../context/Store";
import Icon from "./Icon";

function Favorites() {
  const { favorites, handleData } = useContext(Context);

  const favoritesList = favorites.map((favorite, i) => {
    i += 0;
    return (
      <Table.Row
        onClick={() => {
          handleData(favorite.city, favorite.state);
        }}
        key={`${favorite.city},${favorite.state}`}
        className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:cursor-pointer transform 
                                transition-all duration-500 rounded-lg"
      >
        <Table.Cell className="text-xl">{i + 1}</Table.Cell>
        <Table.Cell>{favorite.city}</Table.Cell>
        <Table.Cell>{favorite.state}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
      <h3 className="dark:text-[#22daff] mt-2 md:mt-0 text-3xl md:text-4xl mb-3 md:mb-6">
        Favorites
      </h3>
      <div className="overflow-y-auto max-h-[70vh] w-full md:w-5/6">
        <Table className="table-fixed">
          <Table.Head className="h-[40px]">
            <Table.HeadCell className="w-[77px]"></Table.HeadCell>
            <Table.HeadCell className="w-[124px] text-gray-900 dark:text-[#e5e2d8]">
              City
            </Table.HeadCell>
            <Table.HeadCell className="w-[140px] text-gray-900 dark:text-[#e5e2d8]">
              State
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y overflow-y-scroll">
            {favoritesList}
          </Table.Body>
        </Table>
      </div>
      {/* <Icon /> */}
    </div>
  );
}

export default Favorites;

import React, { useContext } from "react";
import { Table } from "flowbite-react";
import { Context } from "../context/Store";

function Favorites() {
  const { favorites } = useContext(Context);

  const favoritesList = favorites.map((favorite, i) => {
    i += 0
    return (
      <Table.Row
        key={`${favorite.city},${favorite.state}`}
        className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:cursor-pointer transform 
                                transition-all duration-1000 rounded-lg"
      >
        <Table.Cell className="whitespace-nowrap text-xl">
          {i+1}
        </Table.Cell>
        <Table.Cell>{favorite.city}</Table.Cell>
        <Table.Cell>{favorite.state}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <h3 className="dark:text-[#22daff] mb-1">Favorites</h3>
      <div className="overflow-y-auto overflow-x-hidden max-h-[50vh] w-full md:w-3/4">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell className="text-gray-900 dark:text-[#e5e2d8]">
              City
            </Table.HeadCell>
            <Table.HeadCell className="text-gray-900 dark:text-[#e5e2d8]">
              State
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y overflow-y-scroll">
            {favoritesList}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Favorites;

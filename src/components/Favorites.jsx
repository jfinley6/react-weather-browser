import React, { useContext } from "react";
import { Table } from "flowbite-react";
import { Context } from "../context/Store";

function Favorites() {
  const { favorites } = useContext(Context);

  const favoritesList = favorites.map((favorite) => {
    return (
      <Table.Row
        key={`${favorite.city},${favorite.state}`}
        className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-200 hover:cursor-pointer transform 
                                transition duration-500 hover:scale-[102%] rounded-lg dark:hover:bg-gray-600"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          1
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

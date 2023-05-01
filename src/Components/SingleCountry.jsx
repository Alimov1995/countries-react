import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleCountry.scss";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleCountry();
  }, [name]);
  return (
    <>
      <section>
        <div className="singlepage mx-auto pt-40">
          {country.map((item) => (
            <div class="flex flex-col items-center bg-slate-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={item.flags.svg}
                alt={item.name.common}
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Official:
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.name.official}
                  </span>
                </h5>
                <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Capital:
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.capital}
                  </span>
                </p>
                <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Population:{" "}
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.population.toLocaleString()}{" "}
                  </span>
                </p>
                <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Area:
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.area}км²
                  </span>
                </p>
                <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Fifa:
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    "{item.fifa}"
                  </span>
                </p>
                <Link to="/">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    &larr; Back
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleCountry;

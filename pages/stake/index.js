/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from "react";

export default function Example() {
  // form DATA
  const [stakeAmount, setStakeAmount] = useState(0);
  const [poolType, setPoolType] = useState("Electromagnetic");
  const [range, setRange] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`\n
    Amount: ${stakeAmount} \n
    Pool Type: ${poolType} \n
    Range:  ${range}`);
    stakeAmount && poolType && range;
    //  && onValidated({
    //     STAKEAMOUNT: stakeAmount,
    //     POOLTYPE: poolType,
    //     RANGE: range,
    //   });
  };

  const clearFields = () => {
    setStakeAmount(null);
    setPoolType(null);
    setRange(null);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  123,293.46 RAD
                </h1>
                <p className="mt-3 text-5xl text-gray-300 sm:mt-5  lg:text-4xl xl:text-4xl">
                  Total Staked
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 p-4 rounded-lg shadow-lg">
              <div className="bg-gradient-to-b from-[#0E0A18] to-[#0A0A0A] sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className="mt-6">
                    <form
                      method="POST"
                      onSubmit={(e) => handleSubmit(e)}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="amount" className="sr-only">
                          Stake Amount
                        </label>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Stake Amount</h4>
                          <p className="text-gray-400">Available: 3,863 RAD</p>
                        </span>
                        <input
                          type="number"
                          name="stake-amount"
                          id="stake-amount"
                          autoComplete="amount"
                          placeholder="STAKE AMOUNT [RAD]"
                          required
                          className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border border-[#01FAC3] shadow-lg focus:border-[#01FAC3] ring-slate-500 focus:ring-[#01FAC3] sm:text-xl"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile-or-email" className="sr-only">
                          Pool Type
                        </label>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Pool Type</h4>
                        </span>
                        <select
                          id="pool-type"
                          name="pool-type"
                          className="block w-full p-4 bg-transparent text-white rounded-md border border-[#01FAC3] shadow-lg focus:border-[#01FAC3] ring-slate-500 focus:ring-[#01FAC3] sm:text-xl"
                          defaultValue="Electromagnetic"
                          value={poolType}
                          onChange={(e) => setPoolType(e.target.value)}
                        >
                          <option className=" text-black text-xl p-4">
                            Electromagnetic
                          </option>
                          <option className=" text-black text-xl p-4">
                            Neutron
                          </option>
                          <option className=" text-black text-xl p-4">
                            Beta
                          </option>
                          <option className=" text-black text-xl p-4">
                            Alpha
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="range" className="sr-only">
                          Range
                        </label>
                        <span className="flex mb-4 justify-between items-center text-white">
                          <h4>Range</h4>
                          <span className="px-6 py-2 w-24 justify-self-end text-center bg-gradient-to-r from-green-400 to-blue-500  font-bold rounded-full text-white">
                            {range}
                          </span>
                        </span>
                        <input
                          type="range"
                          name="range"
                          id="range"
                          min="0"
                          max="100"
                          required
                          className="block w-full rounded-lg bg-[#01FAC3] cursor-pointer h-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
                          value={range}
                          onChange={(e) => setRange(e.target.value)}
                        />
                        <span className="flex mt-4 justify-between text-white">
                          <h4>0%</h4>
                          <h4>100%</h4>
                        </span>
                      </div>

                      <div className="border-t border-gray-900 py-6">
                        <span className="flex mb-4 justify-between text-white">
                          <h4>APY: (0.90%) </h4>
                          <p className="text-gray-400">863 RAD</p>
                        </span>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Total Earned</h4>
                          <p className="text-gray-400">3,863 RAD</p>
                        </span>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none"
                        >
                          Stake
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

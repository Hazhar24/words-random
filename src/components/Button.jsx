import words from 'random-words';
import React from "react";

var dataOne = words({ exactly: 20, maxLength: 2 });
var dataTwo = words({ exactly: 20, maxLength: 4 });
var dataThree = words({ exactly: 20, maxLength: 7 });

const Tabs = () => {
  
  const [openTab, setOpenTab] = React.useState(1);
  const refreshPage = () => {window.location.reload(true);}

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block bg-blue-200 leading-normal" + (openTab === 1 ? "text-black bg-" + "-600 bg-blue-600 text-white" : "text-" + "-600")}
                onClick={e => { e.preventDefault(); setOpenTab(1); }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                Easy
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block bg-blue-200 leading-normal" + (openTab === 2 ? "text-black bg" + "-600 bg-blue-600 text-white" : "text-" + "-600")}
                onClick={e => { e.preventDefault(); setOpenTab(2); }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                Medium
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block bg-blue-200 leading-normal" + (openTab === 3 ? "text-black" + "-600 bg-blue-600 text-white" : "text-" + "-600")}
                onClick={e => { e.preventDefault(); setOpenTab(3); }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                Hard
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className='flex flex-wrap justify-center items-center  mx-auto'>
                    {dataOne.map((item) => (
                      <button className='border border-blue-300 font-semibold w-24 h-12 flex items-center justify-center m-1 hover:text-lg'>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className='flex flex-wrap justify-center items-center mx-auto'>
                    {dataTwo.map((item) => (
                      <button className='border border-blue-300 font-semibold w-24 h-12 flex items-center justify-center m-1 hover:text-lg'>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className='flex flex-wrap justify-center items-center mx-auto'>
                    {dataThree.map((item) => (
                      <button className='border border-blue-300 font-semibold w-24 h-12 flex items-center justify-center m-1 hover:text-lg'>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={refreshPage} className='border w-28 h-14 border-green-600 bg-green-300'>Refresh</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Button() {
  return (
    <>
      <Tabs />
    </>
  );
}
'use client'
import { useEffect, useState } from "react";

function Datatables({ data }: any) {
  const [filteredData, setfilteredData] = useState([])
  const [insertdata, setinsertdata] = useState(false)
  // const [slicedata, setslicedata] = useState(500)
  const perslice = 500
  let slicedata = 500
  // useEffect(() => {
  //   if(insertdata){
  //     getData()
  //   }
    
  // },[insertdata])
  useEffect(() => {
    const init = async () => {
      const { Datatable, initTE } = await import("tw-elements");



      initTE({ Datatable });
      const columns = [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: 'Account',
          field: 'Account'
        },
        {
          label: 'Amount',
          field: 'Amount'
        },
        {
          label: 'Counterparty',
          field: 'Counterparty'
        },
        {
          label: 'Tags',
          field: 'Tags'
        },
        {
          label: 'Date',
          field: 'Date'
        },
        {
          label: 'Location',
          field: 'Location'
        },
      ]

      const table = document.getElementById('datatable-clickable-rows')
      const instance = new Datatable(table, { columns }, { loading: true })

      async function getData() {
        if(slicedata < data.length){
          instance.update(
            {
              rows: data.slice(0, slicedata),
            },
            { loading: false }
          );
          slicedata = slicedata +perslice
          await setTimeout(getData, 500);
        }  else {
          instance.update(
            {
              rows: data.slice(0, data.length),
            },
            { loading: false }
          );
        }
       
      }
      await setTimeout(getData, 500);
      const advancedSearchInput: any = document.getElementById('advanced-search-input');

      const search = (value: any) => {
        let [phrase, columns] = value.split(" in:").map((str: any) => str.trim());

        if (columns) {
          columns = columns.split(",").map((str: any) => str.toLowerCase().trim());
        }
        console.log(phrase, columns)
        instance.search(phrase, columns);
      };

      document?.getElementById("advanced-search-button")?.addEventListener("click", (e) => {
        search(advancedSearchInput.value);
      });

      advancedSearchInput.addEventListener("keydown", (e: any) => {
        if (e.keyCode === 13) {
          search(e.target.value);
        }
      });

      table?.addEventListener("rowClick.te.datatable", (e: any) => {
        const { index } = e;
        search(data[index].Counterparty);

      });
    }
    init();
  }, []);
  return (
    <div>
      <div className="mb-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            id="advanced-search-input"
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1" />
          <button
            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="advanced-search-button"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div id="datatable-clickable-rows"
        data-te-clickable-rows="true"></div>
    </div>
  )
}



export default Datatables  
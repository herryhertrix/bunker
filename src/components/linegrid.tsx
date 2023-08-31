'use client'
import { useEffect } from "react";

function Linegrid({ data }: any) {

  const aggregatedData = data.reduce((result: any, transaction: any) => {
    const [year, month] = transaction.Date.split('-');
    const monthKey = `${month}`;

    if (!result[monthKey]) {
      result[monthKey] = { total: 0 };
    }
    result[monthKey].total = parseFloat(result[monthKey].total) + parseFloat(transaction.Amount);
    return result;
  }, {});
  const label = Object.keys(aggregatedData).sort()
  const dataset = label.map(monthKey => aggregatedData[monthKey].total)

  useEffect(() => {
    const init = async () => {
      const { Chart, initTE } = await import("tw-elements");


      initTE({ Chart });
    }
    init();
  }, []);
  return (
<div className="mx-auto w-3/5 overflow-hidden">
  <canvas
    data-te-chart="line"
    data-te-dataset-label="Total Amount"
    data-te-labels={JSON.stringify(label)}
    data-te-dataset-data={JSON.stringify(dataset)}>
  </canvas>
</div>
  )
}



export default Linegrid  
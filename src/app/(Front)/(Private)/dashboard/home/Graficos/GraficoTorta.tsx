'use client'
import dynamic from "next/dynamic";

import {
  Card,
  CardBody,
  CardHeader,
  
} from "@material-tailwind/react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

 
// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
 
const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22],

  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "ddd",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};
 
export default function GraficoTorta({titulo}) {
  return (
        <div className="w-full h-full ">
            <header className="w-full h-10 grid place-items-center">
                {titulo}
            </header>
            <div className="-mt-10">
              <Card shadow={false}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
              >
                
              </CardHeader>
              <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
              </CardBody>
              </Card>

            </div>
        </div>
  );
}
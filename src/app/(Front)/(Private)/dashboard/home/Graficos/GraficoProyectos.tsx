import dynamic from "next/dynamic";

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  //import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Proyectos",
        data: [4,2, 5, 3, 1, 1, 3, 2, 1, 2, 3, 2],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export  function GraficoProyectos() {
    return (
        <div className="w-full h-full ">
            <header className="w-full h-10 grid place-items-center">
                N° Proyectos Creados por mes
            </header>
            <div className="w-full h-7 flex justify-end">
                <div className="w-32 h-full border-b z-50 border-gray-100 flex items-center justify-between px-2 cursor-pointer ">
                  <div>
                    2025
                  </div>
                  <div>
                    <img className="w-[10px] h-[10px]" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="s" />
                  </div>
                </div>
            </div>
            <div className="-mt-4">
              <Card shadow={false}>
                  <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                  >
                  </CardHeader>
                  <CardBody className="px-2 pb-0">
                    <Chart {...chartConfig} />
                  </CardBody>
              </Card>
            </div>
        </div>
      
    );
  }
  
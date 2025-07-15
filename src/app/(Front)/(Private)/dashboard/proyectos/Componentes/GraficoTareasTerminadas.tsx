'use client'

import dynamic from "next/dynamic";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  //import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

   
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Tareas",
        data: [11, 9, 10, 14, 8, 11, 10, 16, 14, 12, 19, 13],
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
      colors: ["#121d23"],
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
   
  export  function GraficoTareasTerminadas() {
    return (
        <div className="w-full h-full ">
            <header className="w-full h-10 7 grid place-items-center mt-7">
                Tareas Terminadas por mes
            </header>
            <div className="-mt-10">
              <Card shadow={false}>
                  <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="flex  flex-col gap-4 rounded-none md:flex-row md:items-center"
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
  
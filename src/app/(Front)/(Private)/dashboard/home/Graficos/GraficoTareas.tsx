'use client'

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  //import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Facturacion (CLP)",
        data: [505224, 447722, 521556, 611244, 311134, 0, 0, 0, 0, 0, 0, 0],
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
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
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
   
  export default function GraficoTareas() {
    return (
        <div className="z-40">
            <header className="w-full h-10 grid place-items-center">
                Evolución de Facturación mensual por proyecto (CLP)
            </header>
            <div className="flex justify-end">
              <div className="w-full h-7 flex ml-[600px]">
                <div className="w-32 h-full border-b z-50 border-gray-100 flex items-center justify-between px-2 cursor-pointer ">
                  <div>
                    Proyecto 1
                  </div>
                  <div>
                    <img className="w-[10px] h-[10px]" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="s" />
                  </div>
                </div>
              </div>
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
            </div>
            <div className="-mt-6">
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
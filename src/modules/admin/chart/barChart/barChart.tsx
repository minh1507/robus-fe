import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useTranslation } from "react-i18next";
import { useTitle } from "../../../../hooks/title/title";
import { useNavigate } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { Divider } from "primereact/divider";
import "./barChart.scss";
function BarChart() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("Bar Chart"));

  const items = [{ label: t("PieChart") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  useTitle(t("Bar Chart"));
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData((prevChartData) => ({ ...prevChartData, ...data }));
    setChartOptions((prevOptions) => ({ ...prevOptions, ...options }));
  }, []);

  return (
    <section className="LineChart-admin-page">
      <BreadCrumb model={items} home={home} />
      <Divider />
      <div className="card barchart">
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    </section>
  );
}
export default BarChart;

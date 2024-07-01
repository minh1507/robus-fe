import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useTitle } from "../../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from "primereact/breadcrumb";
import "./lineChart.scss";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";

function LineChart() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("LineChart"));

  const items = [{ label: t("LineChart") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

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
          label: "Dataset 1",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y",
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: "Dataset 2",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(() => data);
    setChartOptions(() => options);
  }, []);

  return (
    <section className="LineChart-admin-page">
      <BreadCrumb model={items} home={home} />
      <Divider />

      <div className="card">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </section>
  );
}

export default LineChart;

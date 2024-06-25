import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useTitle } from "../../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from "primereact/breadcrumb";
import "./pieChart.scss";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";

function PieChart() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("PieChart"));

  const items = [{ label: t("PieChart") }];
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
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(() => data);
    setChartOptions(() => options);
  }, []);

  return (
    <section className="PieChart-admin-page">
      <BreadCrumb model={items} home={home} />
      <Divider />

      <div className="card flex justify-content-center">
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-full md:w-30rem"
        />
      </div>
    </section>
  );
}

export default PieChart;

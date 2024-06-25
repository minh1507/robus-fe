import React, { useState, Suspense, lazy } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from "primereact/breadcrumb";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import "./chart.scss";

function Chart() {
  //   const { t } = useTranslation();
  //   const navigation = useNavigate();
  //   useTitle(t("Chart"));

  //   const items = [{ label: t("Chart") }];
  //   const home = {
  //     icon: "pi pi-home",
  //     command: () => {
  //       navigation("/admin/home");
  //     },
  //   };

  //   const BarChart = lazy(() => import("./barChart/barChart"));
  //   const LineChart = lazy(() => import("./lineChart/lineChart"));
  //   const PieChart = lazy(() => import("./pieChart/pieChart"));

  //   const [selectedChart, setSelectedChart] = useState("bar");

  //   const renderChart = () => {
  //     switch (selectedChart) {
  //       case "bar":
  //         return <BarChart />;
  //       case "line":
  //         return <LineChart />;
  //       case "pie":
  //         return <PieChart />;
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <section className="Chart-admin-page">
      {/* <div>
        <Suspense fallback={<div>Loading Bar Chart...</div>}>
          <BarChart />
        </Suspense>
        <Suspense fallback={<div>Loading Pie Chart...</div>}>
          <PieChart />
        </Suspense>
        <Suspense fallback={<div>Loading Line Chart...</div>}>
          <LineChart />
        </Suspense>
        <button onClick={() => setSelectedChart("bar")}>Bar Chart</button>
        <button onClick={() => setSelectedChart("pie")}>Pie Chart</button>
        <button onClick={() => setSelectedChart("line")}>Line Chart</button>
        <Suspense fallback={<div>Loading...</div>}>{renderChart()}</Suspense>
      </div> */}
    </section>
  );
}

export default Chart;

import React, {useEffect, useState} from "react";
import "./dashboard.scss";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useTitle} from "../../../hooks/title/title";
import {BreadCrumb} from "primereact/breadcrumb";
import {Divider} from "primereact/divider";
import {Tooltip} from 'primereact/tooltip';
import {Chart} from 'primereact/chart';

function Dashboard() {
    const {t} = useTranslation();
    const navigation = useNavigate();
    useTitle(t("dashboard"));

    const items = [{label: t("dashboard")}];
    const home = {
        icon: "pi pi-home",
        command: () => {
            navigation("/admin/home");
        },
    };

    const [chartData1, setChartData1] = useState<any>(null);
    const [chartOptions1, setChartOptions1] = useState<any>(null);

    const [chartData2, setChartData2] = useState<any>(null);
    const [chartOptions2, setChartOptions2] = useState<any>(null);

    const chart1 = (documentStyle, textColor, textColorSecondary, surfaceBorder) => {
        const data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData1(data);
        setChartOptions1(options);
    }
    const chart2 = (documentStyle, textColor, textColorSecondary, surfaceBorder) => {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData2(data);
        setChartOptions2(options);
    }

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        chart1(documentStyle, textColor, textColorSecondary, surfaceBorder)
        chart2(documentStyle, textColor, textColorSecondary, surfaceBorder)
    }, []);

    return (
        <section className="chart-admin-page">
            <BreadCrumb model={items} home={home}/>
            <Divider/>

            <Tooltip target=".chart-admin-page-tooltip1" mouseTrack mouseTrackLeft={10}/>
            <Tooltip target=".chart-admin-page-tooltip2" mouseTrack mouseTrackLeft={10}/>
            <Tooltip target=".chart-admin-page-tooltip3" mouseTrack mouseTrackLeft={10}/>

            <section className='chart-admin-page-bean-group no-copy mb-3'>
                <section className='chart-admin-page-bean chart-admin-page-tooltip1' data-pr-tooltip="Users">
                    <span>11</span>
                    <i className="pi pi-users"></i>
                </section>
                <section className='chart-admin-page-bean chart-admin-page-tooltip2' data-pr-tooltip="Users">
                    <span>11</span>
                    <i className="pi pi-users"></i>
                </section>
                <section className='chart-admin-page-bean chart-admin-page-tooltip3' data-pr-tooltip="Users">
                    <span>11</span>
                    <i className="pi pi-users"></i>
                </section>
            </section>

            {chartData1 && chartOptions1 && (
                <section className='chart-admin-page-dashboard mb-3'>
                    <section className='chart-admin-page-dashboard-child'>
                        <Chart id={'t-1'} type="polarArea" data={chartData1} options={chartOptions1}/>
                        <p>Chart 1</p>
                    </section>
                    <section className='chart-admin-page-dashboard-child'>
                        <Chart id={'t-2'} type="radar" data={chartData1} options={chartOptions1}/>
                        <p>Chart 2</p>
                    </section>
                </section>
            )}
            {chartData2 && chartOptions2 && (
                <section className='chart-admin-page-dashboard-overlay'>
                    <Chart id={'3'} type="line" data={chartData2} options={chartOptions2}/>
                    <p>Chart 2</p>
                </section>
            )}
        </section>
    );
}

export default Dashboard;

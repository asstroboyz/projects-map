"use client";

import Highcharts from "highcharts";
import dynamic from "next/dynamic";

const HighchartsReact = dynamic(
    () => import("highcharts-react-official"),
    { ssr: false }
);

type PieItem = {
    name: string;
    value: number;
};

export default function PieChartHighcharts({ data }: { data: PieItem[] }) {
    const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");
    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            backgroundColor: "transparent",
            height: 280,
        },

        title: { text: undefined },

        tooltip: {
            headerFormat: "",
            pointFormat:
                "<b>{point.name}</b><br/>Jumlah: <b>{point.y}</b><br/>Persentase: <b>{point.percentage:.1f}%</b>",
        },

        legend: {
            enabled: true,
            align: "right",
            verticalAlign: "middle",
            layout: "vertical",
            itemMarginTop: 6,
            itemMarginBottom: 6,
            itemStyle: {
                color: isDark ? "#e5e7eb" : "#374151",
                fontSize: "13px",
                fontWeight: "500",

            },
        },

        plotOptions: {
            pie: {
                innerSize: "55%",
                allowPointSelect: true,
                cursor: "pointer",
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                },
            },
        },

        series: [
            {
                type: "pie",
                name: "Peminjaman",
                data: data.map((d) => ({
                    name: d.name,
                    y: d.value,
                })),
            },
        ],

        credits: { enabled: false },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
}

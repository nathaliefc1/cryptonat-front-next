import useSWR from "swr";
import _ from "lodash";
import styled from "styled-components";

const ChartStyle = styled.div`
    padding: 50px;
    h2  {
        font-family: "Montserrat", sans-serif;
        font-size: 2rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 7% 10%;
        text-align: center;
        color: #5A4FCF;
    }
`

import {
    Chart,
    BarElement,
    BarController,
    LinearScale,
    CategoryScale,
} from "chart.js";
import { useEffect, useMemo, useRef } from "react";
Chart.register(BarElement, BarController, LinearScale, CategoryScale);

export const MyChart = () => {
    const { data } = useSWR("/api/v3/klines?symbol=BTCUSDT&interval=1m");

    const ref = useRef<HTMLCanvasElement>();

    const chart = useMemo(() => {
        if (!ref.current) return;
        const ctx = ref.current.getContext("2d");
        return new Chart(ctx, {
            type: "bar",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [],
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgb(253, 116, 155)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                    },
                },
            },
        });
    }, [ref.current]);
    console.log("CHART", chart);

    useEffect(() => {
        if (!data || !chart) return;
        console.log("updating data");

        const open_values = _.takeRight(
            data.map((e) => parseFloat(e[1])),
            40
        );

        chart.data.labels = _.range(open_values.length);
        chart.data.datasets[0].data = open_values;
        chart.update();
    }, [data]);

    return (
        <ChartStyle className="container">
            <h2>Bitcoin price</h2>
            <p>Update every 1 minute</p>
            <p>Price x current hour</p>
            <div style={{ height: 500 }}>
                <canvas ref={ref} />
            </div>
        </ChartStyle>
    );
};
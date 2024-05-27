import React from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface RadarChartProps {
    graphScore1: number[][];
    graphScore2: number[][];
    datasetName1: string;
    datasetName2: string;
    width: number;
    height: number;
    texts: string[];
}

const RadarChart = (props: RadarChartProps) => {
    const {
        graphScore1,
        graphScore2,
        datasetName1,
        datasetName2,
        width,
        height,
        texts,
    } = props;

    const data = {
        labels: texts,
        datasets: [
            {
                label: datasetName1,
                data: graphScore1[0],
                backgroundColor: "rgba(114, 42, 238, 0.4)",
                borderColor: "rgba(114, 42, 238, 1)",
                borderWidth: 2,
            },
            {
                label: datasetName2,
                data: graphScore2[0],
                backgroundColor: "rgba(51, 196, 201, 0.4)",
                borderColor: "rgba(51, 196, 201, 1)",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                },
                suggestedMin: 0,
                suggestedMax: 1,
                pointLabels: {
                    font: {
                        size: Math.min(width, height) / 25, // Adjust the font size based on the width and height
                    },
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width, height }}>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;

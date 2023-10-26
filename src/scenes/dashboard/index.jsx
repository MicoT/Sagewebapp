import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Line } from "@nivo/line";
import { Pie } from "@nivo/pie";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import StatBox from "components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const data = [
    { id: "CS", value: 35 }, // Replace with actual number of CS students
    { id: "IS", value: 25 }, // Replace with actual number of IS students
    { id: "EMC", value: 15 }, // Replace with actual number of EMC students
  ];

  const lineGraphData = [
    {
      id: "CCIS",
      data: [
        { x: "2023-11-01", y: 20 },
        { x: "2023-11-02", y: 25 },
        { x: "2023-11-03", y: 22 },
        { x: "2023-11-04", y: 28 },
        { x: "2023-11-05", y: 30 },
        { x: "2023-11-06", y: 35 },
        { x: "2023-11-07", y: 40 },
        { x: "2023-11-08", y: 38 },
        { x: "2023-11-09", y: 45 },
        { x: "2023-11-10", y: 48 },
        { x: "2023-11-11", y: 50 },
        { x: "2023-11-12", y: 55 },
        { x: "2023-11-13", y: 58 },
        { x: "2023-11-14", y: 60 },
        { x: "2023-11-15", y: 62 },
        { x: "2023-11-16", y: 65 },
        { x: "2023-11-17", y: 68 },
        // Add more data points for each day
      ],
    },
  ];
  

  return (
    <Box m="1.5rem 2.5rem" >
      <FlexBetween >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 2fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <StatBox
          title="CS Students"
          value={data[0].value}
          description="Online students in CS"
        />
        <StatBox
          title="IS Students"
          value={data[1].value}
          description="Online students in IS"
        />
        <StatBox
          title="EMC Students"
          value={data[2].value}
          description="Online students in EMC"
        />
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <FlexBetween>
          <Typography variant="h6" sx={{ color: theme.palette.secondary[200] }}>
            Blackboard Students Online
          </Typography>
          <Pie
            width={400}
            height={300}
            data={data}
            margin={{ top: 20, right: 40, bottom: 80, left: 40 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={2}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          />
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Total Online Students per Day in CCIS Department
          </Typography>
          <Line

            width={700}
            height={400}
            data={lineGraphData}
            margin={{ top: 30, right: 40, bottom: 80, left: 90 }}
            xScale={{ type: "time", format: "%Y-%m-%d", useUTC: false }}
            xFormat="time:%Y-%m-%d"
            yScale={{ type: "linear", min: "auto", max: "auto", stacked: true }}
            axisLeft={{ 
              legend: "Students",
              legendOffset: -60,
              legendPosition: "middle",
              
             }}
            axisBottom={{
              format: "%b %d",
              legend: "Date",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            pointSize={8}
            pointColor={{ from: "color", modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
          />
          </FlexBetween>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

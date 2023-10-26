import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { formatDistanceToNow } from 'date-fns';
import { ResponsiveBar } from "@nivo/bar";


const StudentSessions = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Replace this with your student data
  const studentData = [
    {
      id: 1,
      name: "Alice Johnson",
      program: "CS",
      lastLogin: new Date("2023-11-20T10:30:00"),
    },
    {
      id: 2,
      name: "Bob Davis",
      program: "IS",
      lastLogin: new Date("2023-11-20T09:15:00"),
    },
    {
      id: 3,
      name: "Charlie Brown",
      program: "EMC",
      lastLogin: new Date("2023-11-19T14:45:00"),
    },
    // Add more student data
  ];
  const chartData = [
    {
      program: "CS",
      activity: 100, // Replace with actual student activity data
    },
    {
      program: "IS",
      activity: 75, // Replace with actual student activity data
    },
    {
      program: "EMC",
      activity: 50, // Replace with actual student activity data
    },
    // Add more data
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Student Name",
      flex: 2,
    },
    {
      field: "program",
      headerName: "Program",
      flex: 1,
    },
    {
      field: "lastLogin",
      headerName: "Last Login Time",
      flex: 2,
      renderCell: (params) => {
        const lastLogin = new Date(params.value);
        const timeAgo = formatDistanceToNow(lastLogin, { addSuffix: true });
        return timeAgo;
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">Student Sessions</Typography>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
          }}
        >
          <DataGrid
            rows={studentData}
            columns={columns}
          />
        </Box>
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="400px"
        gap="20px"
        p="1rem"
        borderRadius="0.55rem"
        backgroundColor= {theme.palette.background.alt}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          sx={{
            // ... (Styling for the chart container)
          }}
        >
          <Typography variant="h5">Student Activity</Typography>
          <ResponsiveBar
            data={chartData}
            keys={["activity"]}
            indexBy="program"
            margin={{ top: 30, right: 30, bottom: 70, left: 60 }}
            padding={0.3}
            colors={{ scheme: "nivo" }}// Use Nivo theme or customize as needed
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
  
};

export default StudentSessions;

import React, { useState } from 'react';
import Typography from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@mui/material';

const StudentTable = ({ data }) => {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = data.sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  return (
    <TableContainer component={Paper} style={{ padding: '16px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'student_id'}
                direction={orderBy === 'student_id' ? order : 'asc'}
                onClick={() => handleRequestSort('student_id')}
              >
                Student ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'student_name'}
                direction={orderBy === 'student_name' ? order : 'asc'}
                onClick={() => handleRequestSort('student_name')}
              >
                Student Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'program'}
                direction={orderBy === 'program' ? order : 'asc'}
                onClick={() => handleRequestSort('program')}
              >
                Program
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'section'}
                direction={orderBy === 'section' ? order : 'asc'}
                onClick={() => handleRequestSort('section')}
              >
                Section
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'facilitator'}
                direction={orderBy === 'facilitator' ? order : 'asc'}
                onClick={() => handleRequestSort('facilitator')}
              >
                Facilitator
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'college_year'}
                direction={orderBy === 'college_year' ? order : 'asc'}
                onClick={() => handleRequestSort('college_year')}
              >
                College Year
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.student_id}</TableCell>
              <TableCell>{student.student_name}</TableCell>
              <TableCell>{student.program}</TableCell>
              <TableCell>{student.section}</TableCell>
              <TableCell>{student.facilitator}</TableCell>
              <TableCell>{student.college_year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;

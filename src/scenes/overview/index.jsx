import React from "react";
import StudentTable from "components/Table";
const studentData = [
  {
    student_id: "6371251df03239e680000001",
    student_name: "Alice Johnson",
    program: "CS",
    section: "A222",
    facilitator: "John Smith",
    college_year: 2,
  },
  {
    student_id: "6371251df03239e680000002",
    student_name: "Bob Davis",
    program: "IS",
    section: "A444",
    facilitator: "Emma White",
    college_year: 3,
  },
  {
    student_id: "6371251df03239e680000003",
    student_name: "Charlie Brown",
    program: "EMC",
    section: "A222",
    facilitator: "Sarah Wilson",
    college_year: 1,
  },
  {
    student_id: "6371251df03239e680000004",
    student_name: "David Lee",
    program: "CS",
    section: "A444",
    facilitator: "Michael Johnson",
    college_year: 4,
  },
  {
    student_id: "6371251df03239e680000005",
    student_name: "Eve Smith",
    program: "IS",
    section: "A222",
    facilitator: "James Brown",
    college_year: 2,
  },
  {
    student_id: "6371251df03239e680000006",
    student_name: "Frank Johnson",
    program: "CS",
    section: "A222",
    facilitator: "Linda Wilson",
    college_year: 3,
  },
  {
    student_id: "6371251df03239e680000007",
    student_name: "Grace Taylor",
    program: "EMC",
    section: "A444",
    facilitator: "Robert Davis",
    college_year: 2,
  },
  {
    student_id: "6371251df03239e680000008",
    student_name: "Hannah Martin",
    program: "IS",
    section: "A222",
    facilitator: "William White",
    college_year: 1,
  },
  {
    student_id: "6371251df03239e680000009",
    student_name: "Ian Brown",
    program: "CS",
    section: "A444",
    facilitator: "Olivia Smith",
    college_year: 4,
  },
  {
    student_id: "6371251df03239e680000010",
    student_name: "Jack Davis",
    program: "IS",
    section: "A222",
    facilitator: "Sophia Johnson",
    college_year: 2,
  },
  {
    student_id: "6371251df03239e680000011",
    student_name: "Karen Wilson",
    program: "CS",
    section: "A444",
    facilitator: "Daniel Lee",
    college_year: 3,
  },
  {
    student_id: "6371251df03239e680000012",
    student_name: "Liam Smith",
    program: "IS",
    section: "A222",
    facilitator: "Ella Brown",
    college_year: 1,
  },
  {
    student_id: "6371251df03239e680000013",
    student_name: "Mia Johnson",
    program: "EMC",
    section: "A444",
    facilitator: "Noah Taylor",
    college_year: 4,
  },
  {
    student_id: "6371251df03239e680000014",
    student_name: "Nathan Davis",
    program: "CS",
    section: "A222",
    facilitator: "Ava White",
    college_year: 2,
  },
  {
    student_id: "6371251df03239e680000015",
    student_name: "Olivia Wilson",
    program: "IS",
    section: "A444",
    facilitator: "Benjamin Martin",
    college_year: 3,
  },
];
function overview() {
  return (
    <div className="App">
      <StudentTable data={studentData} />
    </div>
  );
}

export default overview;

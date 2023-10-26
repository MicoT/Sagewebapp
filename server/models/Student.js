import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      required: true,
      unique: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      enum: ["CS", "IS", "EMC"],
      required: true,
    },
    section: {
      type: String,
      enum: ["A222", "A444"],
      required: true,
    },
    facilitator: {
      type: String,
      required: true,
    },
    college_year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;

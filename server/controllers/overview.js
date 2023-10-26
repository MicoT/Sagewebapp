import Student from "../models/Student.js";


export const getStudents = async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findById(id);
      res.status(200).json(student);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


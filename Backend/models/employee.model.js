import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  DateOfJoining: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model("Employee", employeSchema);
export default Employee;

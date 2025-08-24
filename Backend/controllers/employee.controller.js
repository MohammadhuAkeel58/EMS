import Employee from "../models/employee.model.js";
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      success: true,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employees = await Employee.findById(id);
    if (!employees) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const createEmployee = async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    role: req.body.role,
    DateOfJoining: req.body.DateOfJoining,
  });
  try {
    const newEmployee = await employee.save();
    res.status(201).json({ newEmployee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const change = req.body;
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(id, change);
    if (!updateEmployee) {
      res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json({
        updateEmployee,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(id);
    if (!deleteEmployee) {
      res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json({
        deleteEmployee,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

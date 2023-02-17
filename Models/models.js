import query from "../Database/index.js";

/**GET */
/**
 * Queries and retrieves all entries from employee database
 * @returns An array of employee objects
 */
export async function getAllEmployees() {
  const result = await query(`SELECT * FROM employee;`);
  const employees = result.rows;
  return employees;
}

/** POST */
/** Accepts JSON body data and posts new entry into the database
 * (i.e. for user manager to add a new employee to the database)
 *  @returns A new entry into the database (i.e. adding a new employee) */
export async function createEmployee(newEmployee) {
  const result = await query(
    `INSERT INTO employee
  (name, employment_status, role, reporting_line)
  VALUES ($1,$2,$3,$4) RETURNING *;`,
    [
      newEmployee.name,
      newEmployee.employment_status,
      newEmployee.role,
      newEmployee.reporting_line,
    ]
  );
  const employee = result.rows[0];
  console.log(newEmployee);
  return employee;
}

/** TEST POST */
// {
//     "name": "Adrian Alias",
//     "employment_status": true,
//     "role": "Senior Engineer",
//     "reporting_line": "Sarah Smith"
// }

/** DELETE */
export async function deleteEmployee(id) {
  const data = await query("DELETE FROM employee WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows[0];
}

/** PATCH */

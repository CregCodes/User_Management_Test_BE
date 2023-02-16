import query from "../Database/index.js";

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

/** PATCH */

/** DELETE */

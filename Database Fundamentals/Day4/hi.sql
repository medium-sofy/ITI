-- 1- Display the department names and the names of the city they are in.
	select department_name, city
    from departments inner join locations
    on departments.location_id = locations.location_id;

-- 2- Display the full data about all employees along with the name of the managers
-- (supervisors ) they report to.

    -- Used an inner join to exclude the CEO who doesn't have a manager.
	select emps.* , concat(mgrs.first_name, ' ', mgrs.last_name) as 'Manager Name'
    from employees emps inner join employees mgrs
    on emps.manager_id = mgrs.employee_id;

-- 3- Display the department ID, department name, manager ID, and the name of
-- the manager.
	select departments.department_id, department_name, departments.manager_id, concat(first_name, ' ', last_name) as 'Manager Name'
    from departments inner join employees
    on departments.manager_id = employees.employee_id;

-- 4- Display (Using Union Function)
-- a. The last name and the job id of the employees works in dept 30
-- b. The last name and the job id of the employees works in dept 60

	select last_name, job_id, department_id from employees where department_id = 30
    union
	select last_name, job_id, department_id from employees where department_id = 60;

--  5- Display the ID, name, and city of the departments in Roma or Seattle city.

    select department_id, department_name, city
    from departments inner join locations
    on departments.location_id = locations.location_id
    where city = 'Seattle' or city = 'Roma';

-- 6- Display the full data of the departments with names that start with the letter
-- "a".

	select * from departments where department_name like 'a%';

-- 7- Display all the employees in department 30 whose salary is between 7000 to
-- 15000.
	select * from employees
	where department_id = 30
    and salary between 7000 and 15000;
-- 8- Find the names of the employees who directly report to Steven King.

	-- Using a Subquery
	select concat(first_name, ' ', last_name)  as 'Full Name', manager_id
    from employees
    where manager_id = (select employee_id  from employees where first_name = 'Steven' and last_name = 'King');

    -- Using a Join
    select concat(emps.first_name, ' ' , emps.last_name)  as 'Full Name', emps.manager_id, concat(mgrs.first_name,' ', mgrs.last_name) as 'Manager Name'
    from employees emps inner join employees mgrs
    on emps.manager_id = mgrs.employee_id
	where mgrs.first_name = 'Steven' and mgrs.last_name = 'King';

-- 	9- For each department, list the department name and the total salary (for all
-- employees) spent on that department.

	select department_name, sum(salary) as 'Total Salaries'
    from departments inner join employees
    on employees.department_id = departments.department_id
    group by department_name
    order by department_name asc;

-- 10- Retrieve the names of all employees and the names of the departments they
-- are working in, sorted by the department name.

	-- Used an inner join to exclude employees with no departments
	select concat(first_name, ' ', last_name) as 'Full Name', department_name
    from employees inner join departments
    on employees.department_id = departments.department_id
    order by department_name;

-- 11- Display the data of the department which has the smallest employee ID over
-- all employees' ID.

	select departments.*, employee_id
    from departments  inner join employees
    on employees.department_id = departments.department_id
    where employee_id = (select min(employee_id) from employees);

-- 12- For each department, retrieve the department name and the maximum,
-- minimum, and average salary of its employees.

	-- Here, I used avg() function without coalesce(), to count only the employees who have salaries.
    -- we used an inner join, which ignores employees without departments.
	select department_name, max(salary) as 'Max Salary', min(salary) as 'Min Salary', avg(salary) as 'Average Salary', count(*) as 'No. of Emps'
    from departments inner join employees
    on employees.department_id = departments.department_id
    group by department_name;

--     13- For each department, if its average salary is less than the average salary of all
-- employees, display its number, name, and number of its employees.

	-- average salary of all employees is 6461
	select  departments.department_id, department_name, count(*) as 'No. of Emps', avg(salary) as 'Average Salary'
    from departments inner join employees
    on employees.department_id = departments.department_id
    group by department_id
    having avg(salary) < (select avg(salary) from employees);

-- 14- Retrieve a list of employees and the departments they are working in,
-- ordered by department and within each department, ordered alphabetically by
-- last name, first name.

select department_name, last_name, first_name
from employees inner join departments
on employees.department_id = departments.department_id
order by department_name, last_name, first_name

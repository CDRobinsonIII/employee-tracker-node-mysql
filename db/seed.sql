USE employees_DB;

INSERT INTO department
    (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000,1),
    ('Salesperson', 80000,1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Ryan', 'Day', 1, NULL),
    ('Justin', 'Fields', 2,1),
    ('Kaitlyn','Stephens',3,NULL),
    ('Julius','Jones',4,3),
    ('Tray','Sermon',5, NULL),
    ('Chris','Olave',6,5),
    ('Master','Teague', 7, NULL),
    ('Cindy ', 'Gungerson', 8, 7);
    

<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="translate-to-sql" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Translate natural language to SQL queries.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                ### Postgres SQL tables, with their properties: <br/>
                # <br/>
                # Employee(id, name, department_id) <br/>
                # Department(id, name, address) <br/>
                # Salary_Payments(id, employee_id, amount, date) <br/>
                # <br/>
                ### A query to list the names of the departments which employed more than 10 employees in the last 3 months <br/>
                SELECT DISTINCT department.name  <br/>
                FROM department  <br/>
                JOIN employee ON department.id = employee.department_id  <br/>
                JOIN salary_payments ON employee.id = salary_payments.employee_id  <br/>
                WHERE salary_payments.date > (CURRENT_DATE - INTERVAL '3 months')  <br/>
                GROUP BY department.name  <br/>
                HAVING COUNT(employee.id) > 10; <br/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .example {
        max-height: 35rem;
        overflow: auto;
    }
</style>
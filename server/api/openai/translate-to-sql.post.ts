export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    const otherParams = {
        model : "text-davinci-003", 
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"],
        // additional_prompt: "### Postgres SQL tables, with their properties:\n#\n# Employee(id, name, department_id)\n# Department(id, name, address)\n# Salary_Payments(id, employee_id, amount, date)\n#\n### A query to list the names of the departments which employed more than 10 employees in the last 3 months\nSELECT",
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})

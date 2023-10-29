import Job from "@/models/job";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userId, company_name, job_title, description, salary, createddate, status, job_type } = await request.json();

    try {
        await connectToDB();
        const newJob = new Job({ creator: userId, company_name, job_title, description, salary, createddate, status, job_type});

        await newJob.save();
        return new Response(JSON.stringify(newJob), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new job", { status: 500 });
    }
}

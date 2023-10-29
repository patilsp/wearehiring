import Job from "@/models/job";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const job = await Job.findById(params.id).populate("creator")
        if (!job) return new Response("Job Not Found", { status: 404 });

        return new Response(JSON.stringify(job), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { company_name, job_title, description, salary, createddate, status, job_type } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingJob = await Job.findById(params.id);

        if (!existingJob) {
            return new Response("Jobs not found", { status: 404 });
        }

        // Update the prompt with new data
        existingJob.company_name = company_name;
        existingJob.job_title = job_title;
        existingJob.description = description;
        existingJob.salary = salary;
        existingJob.createddate = createddate;
        existingJob.status = status;
        existingJob.job_type = job_type;

        await existingJob.save();

        return new Response("Successfully updated the Job", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Job", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the Customer by ID and remove it
        await Job.findByIdAndRemove(params.id);

        return new Response("Job deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting job", { status: 500 });
    }
};

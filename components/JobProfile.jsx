import JobCard from "./JobCard";

const JobProfile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full p-5'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 p-2'>
        {data.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            handleEdit={() => handleEdit && handleEdit(job)}
            handleDelete={() => handleDelete && handleDelete(job)}
          />
        ))}
      </div>
    </section>
  );
};

export default JobProfile;

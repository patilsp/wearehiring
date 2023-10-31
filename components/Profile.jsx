import JobCard from "./JobCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='m-auto mt-10 max-w-4xl px-4 py-20'>
      <h1 className='head_text text-center'>
        <span className='text_primary'>{name} Profile</span>
      </h1>
      {/* <p className='desc text-left'>{desc}</p> */}

      <div className='mt-10'>
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

export default Profile;

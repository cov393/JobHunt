// import Vue from "vue";
// import VueRouter from "vue-router";
// import Jobs from "./views/Jobs.vue";
// import JobDetails from "./views/JobDetails.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     redirect: "/jobs",
//   },
//   {
//     path: "/jobs",
//     component: JobDetails,
//   },
//   {
//     path: "/jobs/:jobTitle",
//     component: JobDetails,
//     props: (route) => ({ job: getJobByTitle(route.params.jobTitle) }),
//   },
// ];

// function getJobByTitle(title) {
//   // You can replace this with your own logic to get the job object by its title
//   return jobs.find(job)
// }

import Link from 'next/link';
import jobData from '../database/database.json';

function JobList() {
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobData.jobs.map((job, index) => (
          <li key={job.job_title}>
            <Link href={`/job/${index}`}>
              <a>{job.job_title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobList;
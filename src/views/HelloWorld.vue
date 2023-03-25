<template>
  <div>
    <h2>Job List</h2>
    <ul>
      <li v-for="job in jobs" :key="job.job_title">
        <router-link :to="`/jobs/${job.job_title}`" :job="job">{{ job.job_title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          job_title: "HR Manager",
          job_description: "We are looking for an experienced HR Manager...",
          location: "London",
          salary_from: 40000,
          salary_to: 60000,
          posted_date: "2022-12-01",
          consultant_name: "Jane Doe",
          consultant_email: "jane.doe@hrconsultants.co.uk",
          category: "HR",
        },
        {
          job_title: "Insurance Underwriter",
          job_description: "We are seeking an experienced Insurance Underwriter...",
          location: "London",
          salary_from: 45000,
          salary_to: 60000,
          posted_date: "2022-04-15",
          consultant_name: "James Smith",
          consultant_email: "james.smith@insuranceconsultants.co.uk",
          category: "Insurance",
        },
      ],
    };
  },
};
</script>

<template>
    <div>
      <h2>{{ job.job_title }}</h2>
      <p>{{ job.job_description }}</p>
      <p>Location: {{ job.location }}</p>
      <p>Salary range: {{ job.salary_from }} - {{ job.salary_to }}</p>
      <p>Posted date: {{ job.posted_date }}</p>
      <p>Consultant name: {{ job.consultant_name }}</p>
      <p>Consultant email: {{ job.consultant_email }}</p>
      <p>Category: {{ job.category }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      job: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
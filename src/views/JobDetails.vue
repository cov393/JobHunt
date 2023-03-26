<template>
    <div class="container mx-auto p-4">
      <div class="border-2 border-gray-300 rounded p-4">
        <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
        <!-- <p>{{ description }}</p> -->
        <!-- <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="showJobDetails(job)">
          View Details
        </button> -->
      </div>
      ...
    </div>
  </template>
  
  <script>
  import jobsData from "../database/database.json";

  
  export default {
    name: "job_details",
    // components: {
    //   JobDetails,
    // },
    props:['title'],
    data() {
      return {
        job:'',
        search: "",
        searchQuery: "",
        sortOption: "latest-date",
        selectedCategory: "all",
        jobs: jobsData.jobs,
        sortBy: "category",
      };
    },
    methods: {
    //   showJobDetails(job) {
    //     this.$router.push({ name: "job-details", params: { jobId: job.id } });
    //   },
    showJobDetails(){
        this.$router.push({query:{id:this.jobs}});
        // this.$router.push({path:'/job_'});
      }
    },
    computed: {
      categories() {
        
      },
      filteredJobs() {
      
      },
    },
  };
  </script>
  
<!-- <template>
    <div>Hello</div>
</template>  

<script>
export default {
  name: 'job_details',
  components: {},
};
</script> -->
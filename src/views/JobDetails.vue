<!-- <template>
    <div class="container mx-auto p-4">
      <div class="border-2 border-gray-300 rounded p-4">
        <h2 class="text-2xl font-semibold mb-2">{{ job.job_title }}</h2>

        <p>P Description: {{description }}</p>
        <input v-model="searchQuery"/>
        <div
            v-for="job in filteredJobs"
            :key="job.title">
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import jobsData from "../database/database.json";


  
  export default {
    name: "job_details",
    props:['description'],
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
    computed: {
        categories() {
      const categoriesSet = new Set();
      for (const job of this.jobs) {
        categoriesSet.add(job.category);
      }
      return Array.from(categoriesSet);
    },
      filteredJobs() {
        let jobs = this.jobs.filter((job) => {
        const titleMatch = job.job_title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const categoryMatch =
          this.selectedCategory === "all" ||
          job.category === this.selectedCategory;
        return titleMatch && categoryMatch;})
      },
    },
    watch: {
        title() {
            console.log('props details');
            this.getPostDetails();
        },
    },  
    created() {
      
        console.log(this.$route.params);
        //this.getPostDetails();
    },

  };
  </script>
   -->

   <template>
  <div class="container mx-auto p-4">
    <div class="border-2 border-gray-300 rounded p-4">
      <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
      <p>Job Description: {{ description }}</p>
      <p>Job Category: {{ category }}</p>
      <p>Job Type: {{ job.job_type }}</p>
      <p>Job Location: {{ job.location }}</p>
      <!-- Add any other job details you want to display here -->
    </div>
  </div>
</template>
  
  <script>
import jobsData from "../database/database.json";

export default {
  name: "job_details",
  props: ["description","title","category"],
  
  data() {
    return {
      job: {
        job_title: "",
        description: "",
        category: "",
        job_type: "",
        location: "",
        // Add any other job properties with default values here
      },
      selectedCategory: "all",
      jobs: jobsData.jobs,
    };
  },  

  computed: {
    categories() {
      const categoriesSet = new Set();
      for (const job of this.jobs) {
        categoriesSet.add(job.category);
      }
      return Array.from(categoriesSet);
    },
  },
  created() {
    console.log(this.$route.params);
  },
};
</script>

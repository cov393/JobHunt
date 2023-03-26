<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">Job Search</h1>
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search jobs..."
        class="border-2 border-gray-300 rounded px-3 py-2 w-full"
      />
    </div>

    <div class="flex justify-between mb-4">
      <div>
        <label for="sort" class="mr-2">Sort by:</label>
        <select
          v-model="sortOption"
          id="sort"
          class="border-2 border-gray-300 rounded px-3 py-2"
        >
          <option value="latest-date">Latest Date</option>
          <option value="highest-salary">Highest Salary</option>
        </select>
      </div>

      <div>
        <label for="category" class="mr-2">Filter by category:</label>
        <select
          v-model="selectedCategory"
          id="category"
          class="border-2 border-gray-300 rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="job in filteredJobs"
        :key="job.job_title"
        class="border-2 border-gray-300 rounded p-4">
        <h2 class="text-2xl font-semibold mb-2">{{ job.job_title }}</h2>
        <p>{{ job.job_description }}</p>
        <p>{{ job.posted_date }}</p>
        <p>{{ job.salary_to }}</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="showJobDetails(job)">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import jobsData from "./database/database.json";
import JobDetails from "./views/JobDetails.vue";

export default {
  name: "app",
  components: {
    JobDetails,
  },
  data() {
    return {
      search: "",
      searchQuery: "",
      sortOption: "latest-date",
      selectedCategory: "all",
      jobs: jobsData.jobs,
      sortBy: "category",
    };
  },
  methods: {
    showJobDetails(job) {
      this.selectedJob = job;
    },
    // showJobDetails(){
    //   // this.$router.push({path:'/job',query:{id:this.jobs[1].job_title}});
    //   // this.$router.push({path:'/job'});
    // }
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
        return titleMatch && categoryMatch;
      });

      if (this.sortOption === "latest-date") {
        jobs.sort(
          (a, b) =>
            new Date(b.posted_date).toLocaleDateString("en-US") -
            new Date(a.posted_date).toLocaleDateString("en-US")
        );
      } else if (this.sortOption === "highest-salary") {
        jobs.sort((a, b) => b.salary_to - a.salary_to);
      }
      return jobs;
    },
  },
};
</script>

<template>
  <!-- SEARCH BY NAME -->
  <div class="container mx-auto p-4">
    <p class="text-4xl font-bold mb-4">Job Search</p>
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search jobs..."
        class="border-2 border-gray-300 rounded px-3 py-2 w-full"
      />
    </div>

    <!-- SORTING -->
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

      <!-- FILTER -->
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

    <!-- DISPLAY -->
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="job in filteredJobs"
        :key="job.job_title"
        class="border-2 border-gray-300 rounded p-4"
      >
        <h2 class="text-2xl font-semibold mb-2">{{ job.job_title }}</h2>
        <p>{{ job.job_description }}</p>
        <p>{{ job.posted_date }}</p>
        <p>{{ job.salary_to }}</p>

        <router-link
          :to="{
            name: 'job_details',
            params: {
              description: job.job_description,
              title: job.job_title,
              category: job.category,
            },
            query: { sort: 'asc' },
          }"
          class="btn btn-primary"
        >
          <button>View</button>
        </router-link>
      </div>
    </div>

    <!-- PAGINATION -->
    <!-- NOT IMPLEMENTED -->
    
  </div>
</template>
  
  <script>
import jobsData from "../database/database.json";

export default {
  name: "job_search",

  data() {
    return {
      search: "",
      searchQuery: "",
      sortOption: "latest-date",
      selectedCategory: "all",
      jobs: jobsData.jobs,
      sortBy: "category",
      postDetails: [],
      page: 1, // Set initial current page
      totalPages: 0, // Set the reference point
    };
  },
  methods: {
    showJobDetails(job) {
      this.selectedJob = job;
    },
    // POST to new Page
    formatPosts(postsData) {
      for (let key in postsData) {
        this.postDetails.push({
          ...postsData[key],
          description: key,
          title,
          category,
        });
      }
    },

    // PAGE
    
    
  },
  computed: {
    // categories list
    categories() {
      const categoriesSet = new Set();
      for (const job of this.jobs) {
        categoriesSet.add(job.category);
      }
      return Array.from(categoriesSet);
    },
    // Filter by category
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
      //Sort by
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
  
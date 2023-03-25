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
          class="border-2 border-gray-300 rounded p-4"
        >
          <h2 class="text-2xl font-semibold mb-2">{{ job.job_title }}</h2>
          <p>{{ job.job_description }}</p>
        </div>
      </div>
      <div>
        <h1>Welcome to my app</h1>
        <a href="./components/HelloWorld.vue">Hello</a>
        <router-link to="./components/HelloWorld.vue">Go to Hope</router-link>
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        searchQuery: "",
        sortOption: "latest-date",
        selectedCategory: "all",
        jobs: [
          {
            job_title: "HR Manager",
            job_description:
              "We are looking for an experienced HR Manager to oversee all aspects of human resources practices and processes in our organization. You will support business needs and ensure the proper implementation of company strategy and objectives.",
            location: "London",
            salary_from: 40000,
            salary_to: 60000,
            posted_date: "2022-12-01",
            consultant_name: "Jane Doe",
            consultant_email: "jane.doe@hrconsultants.co.uk",
            category: "HR",
          },
          {
            job_title: "Insurance Claims Adjuster",
            job_description:
              "We are looking for an experienced Insurance Claims Adjuster to join our team. The successful candidate will be responsible for investigating and processing insurance claims, negotiating settlements, and communicating with clients and other stakeholders. The ideal candidate should have a strong background in insurance claims, excellent communication skills, and the ability to work well under pressure.",
            location: "Birmingham",
            salary_from: 28000,
            salary_to: 35000,
            posted_date: "2022-04-01",
            consultant_name: "Sarah Thompson",
            consultant_email: "sarah.thompson@insuranceconsultants.co.uk",
            category: "Insurance",
          },
          // ... Add the other job objects here
        ],
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
          return titleMatch && categoryMatch;
        });
  
        if (this.sortOption === "latest-date") {
          jobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));
        } else if (this.sortOption === "highest-salary") {
          jobs.sort((a, b) => b.salary_to - a.salary_to);
        }
  
        return jobs;
      },
    },
  };
  </script>
  
  <style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css");
  </style>
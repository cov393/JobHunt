<template>
  <div class="container mx-auto p-4">
    <div class="border-2 border-gray-300 rounded p-4">
      <router-link :to="{ name: 'job_search' }" class="btn btn-primary">
        <button>back</button>
      </router-link>
      <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
      <div v-for="(item, itemIndex) in find_data" :key="itemIndex">
        <p>Job ID</p>
        <p>{{ item.location }}</p>
        <p>£{{ item.salary_from }}</p>
      </div>
      <p>
         Posted {{ passDaysCount }} days ago
      </p>
    </div>
  </div>
</template>
  
  <script>
import jobsData from "../database/database.json";
import JobItem from "./JobItem.vue";

export default {
  components: {
    JobItem,
  },
  name: "job_details",
  props: ["description", "title", "category"],

  data() {
    return {
      DataList: [],
      value: undefined,
      jobs: jobsData.jobs,
      days_pass: null,
    };
  },
  computed: {
    // DATE CALCULATION
    passDaysCount() {
      const today_date = new Date();
      const pass_date = new Date(this.DataList[0][0].posted_date);
      const days = (today_date, pass_date) => {
        let diff = today_date.getTime() - pass_date.getTime();
        let totalDays = Math.ceil(diff / (1000 * 3600 * 24));
        return totalDays;
      };
      return days(today_date, pass_date);
    },

    // PASSED DATABASE FILTER
    find_data() {
      const dataB = this.jobs.filter((par) => {
        return par.job_description == this.description;
      });
      this.DataList.push(dataB);
      this.value = undefined;
      console.log(this.DataList);
      return dataB;
    },
  },
};
</script>

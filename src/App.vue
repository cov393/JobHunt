<template>
  <router-view name="job_search"></router-view>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div>
                  <router-view></router-view>
              </div>
              <div>
                  <router-view name="job_search"></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style></style>
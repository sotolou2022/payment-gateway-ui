<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
    <!-- added this table  -->
     <div class="row"> 
      <div class="col-12">
        <credits-table />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";
import CreditsTable from "./components/CreditsTable";

export default {
  name: "tables",
  components: {
    AuthorsTable,
    ProjectsTable,
    CreditsTable
  },
};
</script>

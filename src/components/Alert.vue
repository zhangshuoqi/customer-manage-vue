<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Alert!</strong> {{ message }}
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["message"],
  data() {
    return {};
  }
};
</script>

<style>
</style>

<script setup>
import Landing from './../components/Landing.vue'

/*window.onbeforeunload = function(_event) {
  _event = _event || window.event;

  // For IE and Firefox prior to version 4
  if (_event) _event.returnValue = "Sure?";

  // For Safari
  return "Sure?";
};*/
</script>

<template>
  <Landing />
</template>

<style scoped>
</style>
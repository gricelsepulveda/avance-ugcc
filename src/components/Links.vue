<template>
  <div>
      <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
    name: "Link",
    data(){
        return {
            props: ['id']
            }
    }
}
</script>
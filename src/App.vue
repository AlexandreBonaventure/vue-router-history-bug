<template>
<nav>
<ul>
  <li><RouterLink :to="{ name: 'organization-index' }">Go to Index</RouterLink>
</li>
  <li>  <RouterLink :to="{ name: 'organization-settings', params: {id: '0'} }">Go to details</RouterLink></li>
  <li><button @click="$router.go(-1)">Back</button></li>
</ul>
</nav>
</template>

<script>

export default {
  name: 'App',

}
</script>

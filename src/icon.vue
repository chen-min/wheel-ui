<template>
    <svg  class="wui-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script>
export default {
    props: ['name']
}
</script>
<style>
    .wui-icon{width: 1em; height:1em;}
</style>

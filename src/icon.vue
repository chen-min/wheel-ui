<template>
    <svg  class="wui-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script>
    import './svg'

    export default {
        name: 'WUIIcon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .wui-icon{width: 1em; height:1em;}
</style>

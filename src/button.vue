<template>
    <button class='wui-button' :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <wui-icon class = 'icon' v-if="icon && !loading" :name="icon"></wui-icon> 
        <wui-icon class = 'loading icon' name='loading' v-if="loading"></wui-icon>   
        <div class="content">
          <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        // props:['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default:"left",
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading:{
                type: Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss" >
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg)}
    }
    .wui-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        vertical-align: top;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-color: var(--border-color-hover)
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
        > .icon{
            order: 1;
            margin-right: 0.1em;
        }
        > .content{
            order: 2 ;
        }
        &.icon-right{
            >.icon{
                order:2;
                margin-right:0;
                margin-left: 0.1em;
            }
            > .content {
                order:1;
            }
        }


    }
    .loading {
        animation: spin 2s infinite linear;
    }
</style>



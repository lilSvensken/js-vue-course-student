<template>
    <div class="times-container__item" @mouseover="$emit('deleteTime', time.id)">
          {{ time.time }}
          
    </div>
    
</template>

<script>
export default {
    name: 'TimeElement',
    props: ['time'],
    emits: ['deleteTime'],
}
</script>

<style>
.times-container__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fffdb1;
    border: 1px solid #e1dfa2;
    border-radius: 4px;
}
</style>
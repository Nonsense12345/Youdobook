<script lang="ts">
	import { onMount } from 'svelte';
  import TransPage from '$lib/component/TransPage.svelte';
  export let data
  onMount(() => { 
    const zh_lines = document.querySelectorAll('zh-line')
    for(const zh_line of zh_lines){
      zh_line
    }
  }
  )
 
  


</script>
<section>
<h1>{data.chapter_name}</h1>
<TransPage html={data.content}/>
</section>
<style global>
  section {
    background-color: black;
    margin: auto;
    display: flex;
    max-width: 70%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
  }
  h1 {
    background-color: rgb(38, 16, 148);
    padding: 20px;
    margin: 5px;
    border-radius: 10px;
  }
  

</style>

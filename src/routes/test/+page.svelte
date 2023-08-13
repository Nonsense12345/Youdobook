<script>
  import ToggleBtn from "$lib/component/ToggleBtn.svelte";
  import {Lookup} from "$lib/server/LookUp"

  let value = 'on'
  let word = ''
  
</script>
<ToggleBtn bind:value/>
<h1>{value}</h1>
<input type="text" bind:value={word}>
<h2>Result: {Lookup(word,'LV')}</h2>
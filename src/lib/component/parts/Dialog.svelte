<script lang="ts">
  import {ztext, CVtext} from "$lib/component/store"
  const Dicts = ['Names','VietPhrase']
  let selected : string
</script>
<form method="POST" class="EditArea">
  <fieldset>
    <legend>Trung</legend>
    <input type="text" name="zh" bind:value={$ztext}>
  </fieldset>
  <fieldset>
    <legend>Viet</legend>
    <input type="text" name="vi" bind:value={$CVtext}>
  </fieldset>
  <fieldset class="submit">
    <legend>Submit</legend>
    <select name="dict" bind:value={selected}>
      {#each Dicts as  dictName}
      <option value={dictName}>{dictName}</option>
      {/each}
    </select>
    <button>Add {selected}</button>
  </fieldset>
  
</form>
<style>
  .EditArea {
    opacity: 1;
    position: absolute;
    top : 100%;
    left: 100%;
    background-color: aqua;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  fieldset{
    margin: 1vmin;
  }
  .submit {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
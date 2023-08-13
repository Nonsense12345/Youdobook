<script>
  export let data
</script>
<div class="section">
{#each data.data as dt}
  <a href={`/book/${data.novel_id}/${dt.chapter_id}&${dt.chapter_vid}`}>{dt.chapter_name}</a>
{/each}
</div>
<style>
  .section{
    display: flex;
    flex-direction: column;
  }
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: rgb(69, 152, 169);
    margin: auto;
    border: 1px solid blanchedalmond;
    padding: 10px;
    border-radius: 10px;
  }
  a:hover {
    background-color: aqua;
  }
</style>

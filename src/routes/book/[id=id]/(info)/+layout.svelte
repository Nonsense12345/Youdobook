<script lang="ts">
  import {Media} from "$lib/api_call.ts"
  import {page} from "$app/stores"
  export let data
  const host = "https://www.youdubook.com/bookdetail/"
  const tabs = [
    {
      text : 'Directory',
      href : '/ul'
    },
    {
      text : 'Description',
      href : '/description'
    }
  ]
  const root_path = `/book/${data.novel_id}`
</script>
<main>
  <div class="book_info">
    <div class="cover"><img src={Media(data.novel_cover)} alt="cover"></div>
    <div class="book_name"><h2>{data.novel_name}</h2></div>
    <div class="book_status">
      <p>Author: {data.novel_author}</p>
      <p>Type: {data.type_name}</p>
      <p>Tag : {data.novel_tags}</p>
      <p>Link: <a href={host+data.novel_id} target="_blank">Youdubook</a></p>
    </div>
  </div>
  <div class="section">
    <header>
      {#each tabs as tab}
        <a href={root_path+tab.href} class:active={$page.url.pathname.includes(tab.href)}>{tab.text}</a>
      {/each}
    </header>
    <slot/>
  </div>
</main>
<style>
  main {
    background-color: black;
    max-width: 70%;
    margin: auto;
    border: 1px solid rgb(142, 40, 128);
    border-radius: 10px;
  }
  .book_info{
    display: grid;
    border: 1px solid blue;
    border-radius: 10px;
    padding: 2vmax;
    margin: 1vmin;
    grid-template-areas: 'a b' 'a c';
    gap: 1px;
    background: linear-gradient(red,blue);
  }
  .cover {
    width: 50%;
    height: 90%;
    grid-area: a;
  }
  img {
    width: 100%;
    height: 100%;
  }
  
  .book_name{
    background: radial-gradient(circle, rgb(17, 32, 149),rgb(81, 13, 56));
    grid-area: b;
    border: 1px solid blanchedalmond;
    border-radius: 10px;
    text-align: center;
  }
  .book_status{
    background-color: brown;
    padding: 5vmin;
    border: 1px solid blanchedalmond;
    border-radius: 10px;
    grid-area: c;
  }
  a {
    text-decoration: none;
    color: antiquewhite;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid blanchedalmond;
  }
  header > a {
    width: 50%;
    height: 50%;
    text-align: center;
    border: 1px solid rgb(116, 191, 232);
    padding: 5px;
  }
  header > a:focus {
    border-bottom: 2px black solid;
    background-color: aquamarine;
  }
  header > a:hover {
    background-color: rgb(79, 21, 85);
  }
  .active{
    border-bottom: 5px solid rgb(47, 169, 173);
  }
</style>
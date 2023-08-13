<script lang="ts">
	import { enhance } from "$app/forms";
  import "../app.css"
  import {page} from "$app/stores"
  import favicon from "$lib/assets/favicon.png"
  let novel_id : string
  import { updated } from '$app/stores';

  
  const getNovel = async (novel_id) => {
        const data = await fetch('/cwmapi', {
          method : 'POST',
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(novel_id)
        })
        let novel : object = await data.json()
        if(novel.book_data.code == 200 && !window.localStorage.getItem(novel_id)){
        window.localStorage.setItem(novel_id,JSON.stringify(novel))
        console.log(novel)
        }
  }
</script>
<nav>
  <a href="/"><img class="logo" src={favicon} alt="fvc"></a>
  <ul class="nav-list">
    <li class="nav-item"><a  href="/">HomePage</a></li>
    <li class="nav-item"><a href="/translate">Translate</a></li>
  </ul>
  <form on:submit={getNovel(novel_id)}>
  <fieldset>
    <legend>Thanh nhúng Youdubook</legend>
    <input type="text" placeholder="Nhập id truyện" bind:value={novel_id} required>
    <button type="submit">Nhúng</button>
  </fieldset>
  </form>
</nav>
<main data-sveltekit-reload={$updated ? 'off' : ''}>
  <slot/>
</main>

<footer>
  @Copyright 2023
</footer>
<style>
  nav {
    background-color: inherit;
    color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .logo {
    width: 5vmax;
    height: 5vmax;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
  
    
  }
  .nav-item {
    background-color: blanchedalmond;
    padding: 3px;
    border: 1px solid blue;
    border-radius: 5px;
    list-style-type: none;
    margin-right: 20px;
  }
  .nav-item:hover {
    background-color: rgb(171, 22, 82);
  }
   a {
    text-decoration: none;
  }
  
  footer{
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  main {
    flex : 1;
  }
</style>
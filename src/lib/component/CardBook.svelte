<script lang="ts">
  import {Media} from "$lib/api_call"
    export let book_name : string
    export let author : string
    export let cover : string
    export let id : string
</script>
<div class="card">
  <a href={`/book/${id}/description`}><img src="{Media(cover)}" alt="cover"></a>
  <div class="book_name"><a href={`/book/${id}/description`}>{book_name}</a></div>
  <div class="author"><a href="/">{author}</a></div>
</div>
<style>
  .card {
    display: flex;
    flex-direction: column;
    background-color: #1a8fb3;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
    width: 20vh;
    height: 30vh;
    overflow: scroll;
  }
  .card  * {
    color: antiquewhite;
  }
  img {
    width: 90%;
    height: 90%;
    padding: auto;
    border-radius: 10px;
  }
  a {
    text-decoration: none;
  }
  .book_name {
    font-size: small;
  }
  .author {
    font-size: xx-small;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
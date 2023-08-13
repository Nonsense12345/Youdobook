<script lang="ts">
	import CardBook from "$lib/component/CardBook.svelte";
import { onMount } from "svelte";
  let bookSaved : object[] = []
  onMount(() => {
      for(let i = 0;i< window.localStorage.length;i++){
        bookSaved.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
        bookSaved = bookSaved
      }
      console.log(bookSaved)
  })
</script>

  <h1>Truyện đã nhúng</h1>
  <div class="carousel">
  {#each bookSaved as book}
    <CardBook id={book.book_data.data.novel_id} book_name={book.book_data.data.novel_name} author={book.book_data.data.novel_author} cover={book.book_data.data.novel_cover}/>
  {/each}
</div>

<style>
  .carousel {
    display: flex;
    flex-direction: row;
    gap: 5vmin;
  }
</style>
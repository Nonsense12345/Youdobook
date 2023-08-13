<script lang="ts">
	import { SvelteComponent, afterUpdate, beforeUpdate, onMount, tick } from "svelte";
  import {ztext} from "$lib/component/store"
  import Menu from "./parts/Menu.svelte";
  export let html : string
  const menu_width = 147.171875
  let x:number,y : number
  let parent : Element 
  onMount( () => {
    const cv_w = document.querySelectorAll('cv-w')
  for(const cv of cv_w){
    cv.addEventListener('click', async (e) => {
      console.log(cv.textContent)
      parent=null
      await tick()
      const top = cv.getBoundingClientRect().top
      const height = cv.getBoundingClientRect().height
      const left = cv.getBoundingClientRect().left
      const width = cv.getBoundingClientRect().width
      x = top - height
      y = left - menu_width/2 + width/2
      $ztext = ''
      parent = cv
    })
  }
  // const zh_w = document.querySelectorAll('zh-w')
  // for(const zw of zh_w){
  //   zw.addEventListener('click', async (e) => {
  //     console.log(zw.textContent)
  //     parent=null
  //     await tick()
  //     x = zw.getBoundingClientRect().top-zw.getBoundingClientRect().height
  //     y = zw.getBoundingClientRect().left - menu_width/2
  //     console.log("x:",x,"y:",y)
  //     $ztext = ''
  //     parent = zw
  //     console.log('parent',parent)
  //     zw.style.backgroundColor = 'blue'
  //   })
  // }
 })
</script>
<svelte:window on:keypress={(e) => {
  if(e.key == 'q'){
    parent = null
  }
}}/>
<div>
  
  {#if parent}
  <Menu  {x} {y} {parent}/>
  {/if}
  {@html html}
</div>
<style>
  
</style>

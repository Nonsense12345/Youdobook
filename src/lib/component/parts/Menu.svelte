<script lang="ts">
	import { beforeUpdate, onMount } from "svelte";
  import Dialog from "./Dialog.svelte";
  import {ztext,CVtext} from "$lib/component/store"
  let menu : HTMLElement
  let display = false
  export let x =0 ;
  export let y =0;
  export let parent : HTMLElement
  $: if(parent) {
      document.querySelectorAll('zh-w').forEach(element => {
          if(element.classList.contains('focus')){
            element.classList.remove('focus')
          }
      });
      document.querySelectorAll('cv-w').forEach(element => {
          if(element.classList.contains('focus')){
            element.classList.remove('focus')
          }
      });
      console.log(document.textContent)
  }
  let current = parent
  let pre = current.previousSibling as HTMLElement
  let after = current.nextSibling as HTMLElement
  onMount(() => {
    $CVtext = current.textContent == null ? '' : current.textContent
    $ztext = getZh(current)
    current.classList.add('focus')
  })
  function preBtnHandle(){
    if(pre != null){
    current = pre
    pre = current.previousSibling 
    current.classList.add('focus')

    $CVtext = current.textContent + $CVtext
    $ztext = getZh(current) + $ztext
    }
    
  }
  function afterBtnHandle(){
    if(after != null){
    current = after
    after = current.nextSibling
    current.classList.add('focus')
    $CVtext = $CVtext + current.textContent
    $ztext = $ztext + getZh(current) 
    }
    
  }
  function getZh(e : HTMLElement){
    const [start,end] = e.getAttribute('zh-i')?.split('-') as [string,string]
    const line = e.getAttribute('l-i')
    let zh = ''
    console.log(start,end)
    if(start == end){
      return document.querySelector(`[i="${start}"][l-i="${line}"]`)?.textContent || ''
    }
    for(let i = parseInt(start); i <= parseInt(end) ; i++){
      console.log(i)
      let z = document.querySelector(`[i="${i}"][l-i="${line}"]`)
        console.log('zh-iterator:', z?.textContent)
        zh += z?.textContent
        z?.classList.add('focus')
    }
    console.log('zh',zh)
    return zh
  }
 $: console.log('menu:',parent)
  
</script>
<div bind:this={menu} aria-label="Menu" role="tooltip" tabindex="-2" class="menu" style="top : {x}px; left : {y}px" 
>
  <button on:click={preBtnHandle}>	&lt;-</button>
  <button on:click={() => display = !display}>Edit</button>
  <button on:click={afterBtnHandle}>	-&gt;</button>
  {#if display}
    <Dialog/>
  {/if}
  
 
</div>
<style>
  .menu{
    position:fixed;
    z-index: 40;
    display: flex;
    flex-direction: row;
    gap: 0px;
    opacity: 0.8;
  }
  button {
    border: 1px solid black;
  }
 
</style>
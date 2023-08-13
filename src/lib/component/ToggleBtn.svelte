<script lang="ts">
  export let value
  let checked = false
  function handleClick(event? : Event) {
      const target = event?.target as Element
      let state = target.getAttribute('aria-pressed')
      checked = state === 'true' ? false : true
      value = checked === true ? 'on' : 'off'
  }
</script>
<div class="toggle">
  <button aria-pressed={checked} on:click={handleClick}></button>
</div>
<style>
  .toggle {
    display: flex;
    align-items: center;
  }
  .toggle button {
    width: 3.2em;
    height: 1.6em;
    position: relative;
    background-color: grey;
    border: 1px solid bisque;
    border-radius: 15px;
  }
  .toggle button::before{
    content: '';
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        background: #fff;
        top: 0.1em;
        right: 1.5em;
        border-radius: 50%;
        transition: transform 0.3s;
        
  }
  .toggle button[aria-pressed='true']::before{
      transform: translateX(1.3em);
      box-shadow: 0 0 0 1px goldenrod;
        }
  .toggle button[aria-pressed='true']{
    background-color: rgb(151, 60, 147);
  }
</style>e
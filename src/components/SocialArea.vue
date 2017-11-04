<template>
  <div class="root">
    <div class="container">
        <a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-counter" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>
        <img class="shareyoro-img" src="../assets/share_yoro.png" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'social-area'
}

</script>

<style scoped>
.root {
  width: 100%;
  margin-top: 40px;
}

.container {
  margin: 0 auto;
  width: 280px;
  height: 320px;
}

.shareyoro-img {
  width: 280px;
  height: 320px;
}
</style>

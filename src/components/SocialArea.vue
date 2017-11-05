<template>
  <div class="root">
    <div class="socialButtons">
      <div class="socialButtons_twitter">
        <a :href="tweetUrl" rel="nofollow" target="_blank">
        <img src="../assets/galmoji_twitter_icon.png" >
        </a>
      </div>
      <div class="socialButtons_hatena">
        <a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-counter" title="このエントリーをはてなブックマークに追加">
          <img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" />
        </a>
      </div>
    </div>
      <img class="shareyoro-img" src="../assets/share_yoro.png" >
  </div>
</template>

<script>
export default {
  name: 'social-area',
  computed: {
    tweetUrl () {
      let hashtag = encodeURI('ぎゃるもじまくぷれ〜や〜')
      let url = encodeURI(location.href)
      let tweetText = encodeURI(this.$store.state.subtitle)
      let tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=${hashtag}&url=${url}`
      console.log(tweetUrl)
      return tweetUrl
    }
  }
}

</script>

<style scoped>
.root {
  width: 100%;
  margin-top: 40px;
}

.container {
  margin: 0 auto;
}

.socialButtons_twitter, .socialButtons_hatena {
  display: inline-block;
  vertical-align: top;
  height: 20px;
  overflow-y: hidden;
  margin-bottom: 10px;
}

.shareyoro-img {
  width: 280px;
  height: 320px;
}
</style>

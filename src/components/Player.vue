<template>
  <div class="player">
    <div id="player-area">
      <div id="video-player"></div>
      <div class="caption-window caption-window-ja">
        <span class="captions">
          <span class="subtitle">{{ subtitle_ja }}</span>
        </span>
      </div>
      <!-- <div class="caption-window">
        <span class="captions">
          <span class="subtitle">{{ subtitle_en }}</span>
        </span>
      </div> -->
    </div>
    <div class="input-group videoid-input-group">
      <span class="input-group-addon" >https://www.youtube.com/watch?v=</span>
      <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="videoid">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="loadYoutube">
          <span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
        </button>
      </span>
    </div>
    <div v-if="debug">{{ current }}</div>
    <div v-if="debug">{{ srt['ja'] }}</div>
  </div>
</template>

<script>
import YouTubePlayer from 'youtube-player'
import http from 'http'
import {parseString} from 'xml2js'
import galmoji from '../lib/galmoji'

export default {
  name: 'player',
  data () {
    return {
      videoid: '-ZwGeYu2pOQ',
      current: 0,
      player: {},
      srt: {},
      subtitle_ja: '',
      subtitle_en: '',
      debug: false
    }
  },
  methods: {
    loadYoutube: function () {
      this.player = YouTubePlayer('video-player')
      this.player.loadVideoById(this.videoid)
      this.player.stopVideo()
      this.player.on('ready', () => { this.update() })
      this.fetchLangSubtitle('ja')
      // this.fetchLangSubtitle('en')
    },
    // YOUTUBE API を用いて字幕を取得
    fetchLangSubtitle: function (lang) {
      let subtitleUrl = `https://www.youtube.com/api/timedtext?fmt=srv3&lang=${lang}&v=${this.videoid}`
      console.log(subtitleUrl)
      http.get(subtitleUrl, (res) => {
        let body = ''
        res.setEncoding('utf8')

        res.on('data', (chunk) => {
          body += chunk
        })

        res.on('end', (res) => {
          parseString(body, (err, result) => {
            if (!err) console.dir(result)
            let srtList = result.timedtext.body[0].p || []

            // 取得した字幕をギャル文字に変換
            this.srt[lang] = srtList.map(item => {
              return {
                '_': galmoji(item['_']),
                '$': item['$']
              }
            })
          })
        })
      }).on('error', (e) => {
        console.log(e.message) // エラー時
      })
    },
    update: function () {
      if (this.player) {
        this.player.getCurrentTime().then(time => {
          time = Math.floor(time * 1000)
          this.current = time

          this.subtitle_ja = this.getSubtitle('ja')
          // this.subtitle_en = this.getSubtitle('en')
        })
      }
      setTimeout(this.update, 50)
    },
    getSubtitle: function (lang) {
      let subtitle = ''
      if (this.srt[lang]) {
        for (let i = 0; i < this.srt[lang].length; i++) {
          let sub = this.srt[lang][i]
          let startTime = Number(sub.$.t)
          let endTime = startTime + Number(sub.$.d)
          if (startTime <= this.current && this.current <= endTime) {
            subtitle = sub._
            break
          }
        }
      }
      return subtitle
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.caption-window {
  position: absolute;
  text-align: center;
  width: 640px;
  margin: 0 auto;
  bottom: 2%;
  z-index: 35;
}

.caption-window-ja {
  position: absolute;
  text-align: center;
  z-index: 35;
}

.captions {
  text-align: center;
}

.subtitle {
  font-size: 16px;
  bottom: 0px;
  border-radius: 2px;
  color: white;
  fill: rgb(255, 255, 255);
  background: rgba(8, 8, 8, 0.74902);
  font-family: "Nico Moji", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif;
}

#player-area {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 640px;
  height: 360px;
}

.videoid-input-group {
  width: 640px;
  margin: 0 auto;
  margin-top: 16px;
}
</style>

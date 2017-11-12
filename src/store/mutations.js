export const state = {
  videoid: 'NasyGUeNMTs',
  subtitle: '',
  videoTitle: '',
  debug: false
}

export const mutations = {
  setSubtitle (state, subtitle) {
    state.subtitle = subtitle
  },
  setVideTitle (state, videoTitle) {
    state.videoTitle = videoTitle
  },
  setVideoid (state, videoid) {
    state.videoid = videoid
  }
}

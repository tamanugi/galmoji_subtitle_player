export const state = {
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
  }
}

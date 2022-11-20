import mockRequest from '@/utils/mockRequest'
const state = {
  list: {},
  rank: []
}
const mutations = {
  GETDATA(state, list) {
    state.list = list
  },
  GETRANK(state, rank) {
    state.rank = rank
  }
}
const actions = {
  //发请求获取首页的mock数据
  async getData({ commit }) {
    let result = await mockRequest.get('/home/list')
    if (result.code === 20000) {
      commit('GETDATA', result.data)
    }
  },
  async getRank({ commit }, item) {
    let result = await mockRequest.get(`/home/rank/${item}Rank`)
    if (result.code === 20000) {
      commit('GETRANK', result.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}

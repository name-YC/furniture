const state = ({
  list: [
    {username:'admin',password:'123456'}
  ]
})

const mutations = {
  addAccount(state, account) {
    console.log(state.list, account)
  }
}
export default {
  // 命名空间 让调用除了state时可以用模块名区分 this.$store.dispatch('cart/addProductToCart', product)  this.$store.getters['cart/cartTotal']  this.$store.commit('account/addAccount')
  namespaced: true,
  state,
  mutations
}
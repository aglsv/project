const mutations = {
  username:(state,data)=>{
    state.username = data;
    window.sessionStorage.setItem('username',data)
  },
  identity:(state,data)=>{
    state.identity = data;
    window.sessionStorage.setItem('identity',data)
  },
  name:(state,data)=>{
    state.name = data;
    window.sessionStorage.setItem('name',data)
  }
}
export default mutations
const getters ={
  username:(state)=>sessionStorage.getItem('username'),
  name:(state)=>sessionStorage.getItem('name'),
  identity:(state)=>sessionStorage.getItem('identity'),
}
export default getters
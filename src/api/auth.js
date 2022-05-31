export default function(instance) {
  return{
    singIn(payload){
      return instance.post('auth/sing_in', payload)
    },
    logout(payload){
      return instance.post('auth/logout', payload)
    }
  }
}
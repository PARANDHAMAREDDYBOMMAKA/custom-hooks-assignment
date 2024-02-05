
const useStorage = () => {
  const setStorage = (data) => {
      localStorage.setItem('content', JSON.stringify(data))
      sessionStorage.setItem('content', JSON.stringify(data))
  }

  const storage = JSON.parse(localStorage.getItem('content'))

  return [storage,setStorage]
}

export default useStorage
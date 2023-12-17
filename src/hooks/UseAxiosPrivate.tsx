
import { useEffect } from 'react'
import { AxiosPrivate } from "../api/axios"
import { useAuth } from "../context/AuthContext"
import UseRefreshToken from "./UseRefreshToken"


const UseAxiosPrivate = () => {
    const refresh = UseRefreshToken()
    const {auth} = useAuth()

    useEffect(() => {
const requestIntercept = AxiosPrivate.interceptors.request.use(
  config => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
    }
    return config;
  }, (error) => Promise.reject(error)
)

      const responseintercept = AxiosPrivate.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config
            if (error?.reponse?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccesToken = await refresh()
                prevRequest.headers['Authorization'] = `Bearer ${newAccesToken}`
                return AxiosPrivate(prevRequest)
            } return Promise.reject(error)
        }
      )
    
      return () => {
        AxiosPrivate.interceptors.response.eject(responseintercept)
        AxiosPrivate.interceptors.request.eject(requestIntercept) 
      }
    }, [auth, refresh])
    

  return AxiosPrivate
}

export default UseAxiosPrivate
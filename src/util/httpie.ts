import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'vant'
import { BASE_URL, CSRF_NAME } from '@/util/constant'
import navigateToSSO from '@/util/sso'

type BaseResponse<T = any> = {
    data: T
    message: string
    code: number
}

const instance = Axios.create({
    baseURL: BASE_URL,
    validateStatus: null,
    xsrfCookieName: CSRF_NAME,
    xsrfHeaderName: CSRF_NAME,
})

instance.interceptors.request.use(config => ({
        ...config,
        headers: {
            ...config.headers,
        },
    }))

instance.interceptors.response.use(
    (response: AxiosResponse<BaseResponse>) => {
        const { data } = response

        if (data.code === 0) {
            return data.data || null
        }

        if (data.code === -101) {
            navigateToSSO()
            return
        }

        Toast.clear()
        Toast(data.message)
    },
    error => {
        console.error(error)
    },
)

const Httpie = {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return instance.get(url, config)
    },
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return instance.post(url, data, config)
    },
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return instance.put(url, data, config)
    },
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return instance.delete(url, config)
    },
}

export {
    BaseResponse,
    Httpie,
}

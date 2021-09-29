/**
 * @Author: fantasy caoyonggang@bilibili.com
 * @Date: 2021/3/4
 */
import { SSO_UAT_PATH, SSO_PROD_PATH } from '@/util/constant'

const navigateToSSO = () => {
    const { pathname, search, hash } = window.location
    const path = encodeURIComponent(`${pathname}${search}${hash}`)
    let ssoURL = ''
    switch (process.env.NODE_ENV) {
        case 'development':
            ssoURL = `${SSO_UAT_PATH}${path}`
            break
        default:
            ssoURL = `${SSO_PROD_PATH}${path}`
    }

    window.location.replace(ssoURL)
}
export default navigateToSSO

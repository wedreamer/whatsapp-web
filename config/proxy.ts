import { AxiosProxyConfig } from "axios";

const proxy: AxiosProxyConfig = {
    host: 'localhost',
    port: 7890,
    protocol: 'socks5'
}

export default proxy
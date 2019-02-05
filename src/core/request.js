import Vue from 'vue'
import Settings from '@/core/settings'
const settings = new Settings()
const SERVER_ADDRESS = settings.SERVER_ADDRESS
const TIMEOUT = 60000
export default class MyRequest {
  _request (method, path, data, header, isJsonp) {
    const url = `${SERVER_ADDRESS}${path}`
    const fHeader = {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      ...header
    }
    const config = {
      url: url,
      body: data,
      headers: fHeader,
      method: method,
      timeout: TIMEOUT
    }
    switch (method) {
      case 'GET':
        console.log('http request on ' + url + ' by ' + method)
        return Vue.http.get(url, config)
      case 'POST':
        console.log('http request on ' + url + ' by ' + method)
        return Vue.http.post(url, data, config)
      default:
        break
    }
  }

  get (path, data, header, isJsonp) {
    return this._request('GET', path, data, header, isJsonp)
  }
  post (path, data, header, isJsonp) {
    return this._request('POST', path, data, header, isJsonp)
  }
}

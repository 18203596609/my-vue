import axios from 'axios'
import Vue from 'vue'

export  class HttpRequest extends Vue{
  public request (option?:any) {
    const instance = axios.create({
    })

    return instance(option)
  }
}

const Http = new HttpRequest();
export default Http;



import {APICaller} from "../API/apicaller.js";

export class Comment extends APICaller{
    constructor(){
      super()
      this.endpoint='comments'
    }

    getAll(){
      return super.get(`${this.endpoint}`)
    }
  
    getOne(id){
      return super.get(`${this.endpoint}/${id}`)
    }
  }
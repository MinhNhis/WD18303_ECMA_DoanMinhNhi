import {APICaller} from "../API/apicaller.js";

export class Post extends APICaller{
    constructor(baseUrl){
      super(baseUrl)
      this.endpoint='posts'
    }
  
    getAll(){
      return super.get(`${this.endpoint}`)
    }
  
    getOne(id){
      return super.get(`${this.endpoint}/${id}`)
    }
  }
class APICaller{
  constructor(){
      this.baseUrl= 'http://localhost:3000/'
  }
  get(endpoint) {
    return fetch(this.baseUrl+endpoint)
      .then((reponse)=>reponse.json())
        .then((data)=>{
          return data
        })
  }
}
class Comment extends APICaller{
  constructor(baseUrl){
    super(baseUrl)
    this.endpoint='comments'
  }

  getAll(){
    return super.get(`${this.endpoint}`)
  }

  getOne(id){
    return super.get(`${this.endpoint}/${id}`)
  }
}

class Post extends APICaller{
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
let cmt = new Comment()
let post = new Post()
console.log("COMMENT");
console.log(cmt.getAll());
console.log(cmt.getOne('2'));
console.log("POST");
console.log(post.getAll());
console.log(post.getOne('4'));

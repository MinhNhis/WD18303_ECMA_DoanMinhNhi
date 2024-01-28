import {Comment} from "./Comment&Post/comment.js";
import {Post} from "./Comment&Post/post.js";

let cmt = new Comment()
console.log("COMMENT");
console.log(cmt.getAll());
console.log(cmt.getOne('2'));

let post = new Post()
console.log("POST");
console.log(post.getAll());
console.log(post.getOne('4'));


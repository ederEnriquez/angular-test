import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts: Observable<Array<Post>>
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    const word = this.route.snapshot.params.palabra;
    this.posts = this.postsService.getPostsByWord(word);
  }

}

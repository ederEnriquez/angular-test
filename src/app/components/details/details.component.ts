import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  post: Post;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.postsService.getPostDetail(id).subscribe((post:Post) => this.post = post);
  }

}

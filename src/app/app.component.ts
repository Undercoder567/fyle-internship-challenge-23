import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
  userImage: string = ''; 
  bio: string='';
  name:string='';
  company:string='';
  location:string='';
  followers:number=0;
  following:number=0;
  repos: number = 0;
  url: string='';
  publicRepos: any[] = [];
  topics: string[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  paginatedRepos: any[] = [];
  totalPages: number = 0;
  searchExecuted: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
    this.apiService.getRepos('johnpapa').subscribe(console.log);
  }

  search() {
    this.searchExecuted=true;
    this.apiService.getUser(this.searchQuery).subscribe((data: any) => {
      if (data.name) {
        this.userImage = data.avatar_url;
        this.name = data.name;
        this.bio = data.bio;
        this.company = data.company;
        this.location = data.location;
        this.followers = data.followers;
        this.following = data.following;
        this.repos = data.public_repos;
        this.url = data.url;
  
        this.getPaginatedRepos(); // Fetch paginated repositories
      } else {
        this.resetUserData();
      }
    });
  }

  resetUserData() {
    this.userImage = '';
    this.name = '';
    this.bio = '';
    this.company = '';
    this.location = '';
    this.followers = 0;
    this.following = 0;
    this.repos = 0;
    this.url = '';
    this.publicRepos = [];
    this.paginatedRepos = [];
  }
  getPaginatedRepos() {
    this.apiService.getPaginatedRepos(this.searchQuery, this.pageSize,this.currentPage)
      .subscribe((data: any) => {
        this.paginatedRepos = data;
        this.calculateTotalPages();
      });
  }
  
calculateTotalPages() {
  this.totalPages = Math.ceil(this.repos / this.pageSize);
}
  changePageSize() {
    this.currentPage = 1;
    this.getPaginatedRepos();
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
  nextPage() {
    const nextPageNumber = this.currentPage + 1;
    const totalPages = Math.ceil(this.repos / this.pageSize);
  
    if (nextPageNumber <= totalPages) {
      this.currentPage = nextPageNumber;
      this.getPaginatedRepos();
    }
  }
  
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPaginatedRepos();
    }
  }
  
}

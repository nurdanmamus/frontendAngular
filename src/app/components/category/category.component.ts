import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[]
  currentCategory:Category

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
     // this.dataLoaded=true
    });
  }

  setCurrentCategory(category:Category){
    // if (!this.currentCategory) {
    //   this.currentCategory = {}  as Category
    // }
   this.currentCategory = category
  }

  getCurrentCategoryClass(category:Category){
    if (category == this.currentCategory) {
      return "list-group-item list-group-item-warning"
    } else {
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    if (!this.currentCategory) {
    //  this.setCurrentCategory({}  as Category)
      return "list-group-item list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

   setNullCurrentCategory(category:Category){
     this.currentCategory = {} as  Category
  }
}

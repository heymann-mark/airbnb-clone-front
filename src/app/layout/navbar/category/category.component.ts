import { Component, inject, OnInit } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CategoryService} from './category.service';
import {Category} from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  categoryService: CategoryService = inject(CategoryService);

  categories: Category[] | undefined;

  currentActivateCategory: Category = this.categoryService.getCategoryByDefault();

  ngOnInit(): void{
    this.fetchCategories();
  }
  private fetchCategories() {
    this.categories = this.categoryService.getCategories();
    //throw new Error('Method not implemented.');
  }

}
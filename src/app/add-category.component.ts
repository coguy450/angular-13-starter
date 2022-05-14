import { Component } from '@angular/core';
import { HttpService } from './app-config-service';


@Component({
  selector: 'app-root',
  templateUrl: './add-category.html',
  styleUrls: ['./app.component.less'],
})
export class AddCategoryComponent {
  constructor(private service: HttpService) {}

  clickCreateCategory = () => {
    console.log('creating this', this.newCategory)
    this.service.post('activity', {activity: this.newCategory})
      .subscribe(response => {
        console.log(response);
      });
  }
  title = 'add-category';
  newCategory: string = '';
}

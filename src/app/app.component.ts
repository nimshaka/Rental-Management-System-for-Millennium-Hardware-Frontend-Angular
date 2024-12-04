import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { ItemComponent } from './pages/item/item.component';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { ItemViewComponent } from './pages/item-view/item-view.component';
import { RentItemViewComponent } from './pages/rent-item-view/rent-item-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent,HeaderComponent,ItemComponent,CustomerViewComponent,ItemViewComponent,RentItemViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

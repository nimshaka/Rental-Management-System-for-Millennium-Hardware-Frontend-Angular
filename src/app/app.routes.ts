import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ItemComponent } from './pages/item/item.component';
import { RentalComponent } from './pages/rental/rental.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'customer',
        component:CustomerComponent
    },
    {
        path:'item',
        component:ItemComponent
    },
    {
        path:'rent',
        component:RentalComponent
    }
];

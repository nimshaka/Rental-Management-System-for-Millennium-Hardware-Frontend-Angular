import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ItemComponent } from './pages/item/item.component';
import { RentalComponent } from './pages/rental/rental.component';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { ItemViewComponent } from './pages/item-view/item-view.component';
import { RentItemViewComponent } from './pages/rent-item-view/rent-item-view.component';

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
    },
    {
        path:'viewcustomer',
        component:CustomerViewComponent
    },
    {
        path:'viewitem',
        component:ItemViewComponent
    },
    {
        path:'viewrentitem',
        component:RentItemViewComponent
    }
];

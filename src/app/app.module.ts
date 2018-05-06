import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PaymentsComponent } from './payments/payments.component';
import { ServicesComponent } from './services/services.component';
import { RegistryComponent } from './registry/registry.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'services', component: ServicesComponent },
	{ path: 'registry', component: RegistryComponent },
    { path: 'payments', component: PaymentsComponent },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	LoginComponent,
	HomeComponent,
	ScheduleComponent,
	PaymentsComponent,
	ServicesComponent,
	RegistryComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

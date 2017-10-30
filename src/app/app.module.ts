import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, NavigationEnd } from "@angular/router";
import { HttpModule } from '@angular/http';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

import { FileSelectDirective } from "ng2-file-upload";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ServicesComponent } from './components/services/services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { PublicServicesComponent } from './components/public-services/public-services.component';
import { PublicSectionsComponent } from './components/public-sections/public-sections.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalUpdateServiceComponent } from './components/modal-update-service/modal-update-service.component';
import { ServiceUpdateComponent } from './components/service-update/service-update.component';
import { ModalUpdateSectionComponent } from './components/modal-update-section/modal-update-section.component';
import { SectionUpdateComponent } from './components/section-update/section-update.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

import { FreelanceApiService } from './services/freelance-api.service';
import { SessionService } from './services/session.service';
import { HelpersService } from './services/helpers.service';
import { FreelancePublicService } from './services/freelance-public.service';
import { MapsComponent } from './components/maps/maps.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },//delete
  { path: 'p/:id', component: PublicProfileComponent },  
  { path: 's/:query', component: SearchListComponent },
  { 
    path: 'dashboard', component: DashboardComponent, canActivate: [SessionService],
    children: [
      { path: '', component: DashboardHomeComponent, canActivate: [SessionService]},
      { path: 'profile', component: ProfileComponent, canActivate: [SessionService] },
      { path: 'services', component: ServicesComponent, canActivate: [SessionService] },
      { path: 'password', component: ChangePasswordComponent, canActivate: [SessionService] },
      { path: 'service/:id', component: SectionsComponent, canActivate: [SessionService] }
      // { path: 'sections', component: SectionsComponent, canActivate: [SessionService] },
    ]
  },
  { path: ':serviceId/:sectionId', component: PublicSectionsComponent },  
  { path: ':url', component: PublicServicesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SearchListComponent,
    ProfileComponent,
    SectionsComponent,
    ServicesComponent,
    DashboardComponent,
    LogoutComponent,
    PublicProfileComponent,
    PublicServicesComponent,
    PublicSectionsComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    FileSelectDirective,
    DashboardMenuComponent,
    HeaderComponent,
    DashboardHomeComponent,
    ServicesListComponent,
    ChangePasswordComponent,
    ModalUpdateServiceComponent,
    ServiceUpdateComponent,
    ModalUpdateSectionComponent,
    SectionUpdateComponent,
    SearchItemComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: `${environment.googleApiKey}`,
      libraries: ["places"]
    }),
  ],
  providers: [SessionService, FreelanceApiService, FreelancePublicService, HelpersService],
  entryComponents: [
    ModalUpdateServiceComponent,
    ModalUpdateSectionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

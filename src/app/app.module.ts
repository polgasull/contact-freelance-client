import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, NavigationEnd } from "@angular/router";
import { HttpModule } from '@angular/http';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

import { FileSelectDirective, FileUploadModule, FileDropDirective } from "ng2-file-upload/ng2-file-upload";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { SignupComponent } from './components/public/signup/signup.component';
import { SearchListComponent } from './components/public/search-list/search-list.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { SectionsComponent } from './components/private/sections/sections.component';
import { ServicesComponent } from './components/private/services/services.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { PublicProfileComponent } from './components/public/public-profile/public-profile.component';
import { PublicServicesComponent } from './components/public/public-services/public-services.component';
import { PublicSectionsComponent } from './components/public/public-sections/public-sections.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DashboardMenuComponent } from './components/private/dashboard-menu/dashboard-menu.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { DashboardHomeComponent } from './components/private/dashboard-home/dashboard-home.component';
import { ListItemComponent } from './components/private/list-item/list-item.component';
import { ChangePasswordComponent } from './components/private/change-password/change-password.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalComponent } from './components/private/modal/modal.component';
import { SearchItemComponent } from './components/public/search-item/search-item.component';

import { FreelanceApiService } from './services/freelance-api.service';
import { SessionService } from './services/session.service';
import { HelpersService } from './services/helpers.service';
import { FreelancePublicService } from './services/freelance-public.service';
import { MapsComponent } from './components/global/maps/maps.component';
import { ContactFormComponent } from './components/public/contact-form/contact-form.component';
import { NotFoundComponent } from './components/global/not-found/not-found.component';
import { NotFoundPageComponent } from './components/public/not-found-page/not-found-page.component';
import { CardBoxComponent } from './components/global/card-box/card-box.component';
import { FormCreateUpdateComponent } from './components/global/form-create-update/form-create-update.component';
import { CallModalComponent } from './components/global/call-modal/call-modal.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'p/:id', component: PublicProfileComponent },  
  { path: 's/:query', component: SearchListComponent },
  { path: 'e/error', component: NotFoundPageComponent }, 
  { 
    path: 'dashboard', component: DashboardComponent, canActivate: [SessionService],
    children: [
      { path: '', component: DashboardHomeComponent, canActivate: [SessionService]},
      { path: 'profile', component: ProfileComponent, canActivate: [SessionService] },
      { path: 'services', component: ServicesComponent, canActivate: [SessionService] },
      { path: 'password', component: ChangePasswordComponent, canActivate: [SessionService] },
      { path: 'service/:id', component: SectionsComponent, canActivate: [SessionService] }
    ]
  },
  { path: ':serviceId/:sectionId', component: PublicSectionsComponent }, 
  
  { path: ':url', component: PublicServicesComponent },
  { path: '**', component: NotFoundPageComponent }
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
    PublicProfileComponent,
    PublicServicesComponent,
    PublicSectionsComponent,
    NavbarComponent,
    FooterComponent,
    DashboardMenuComponent,
    HeaderComponent,
    DashboardHomeComponent,
    ListItemComponent,
    ChangePasswordComponent,
    ModalComponent,
    SearchItemComponent,
    MapsComponent,
    ContactFormComponent,
    NotFoundComponent,
    NotFoundPageComponent,
    CardBoxComponent,
    FormCreateUpdateComponent,
    CallModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TagInputModule,
    FileUploadModule,
    BrowserAnimationsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: `${environment.googleApiKey}`,
      libraries: ["places"]
    }),
  ],
  providers: [SessionService, FreelanceApiService, FreelancePublicService, HelpersService],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

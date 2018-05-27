import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from 'in-memory-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatIconModule} from '@angular/material/icon';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { CommonNavComponent } from './common-nav/common-nav.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import { MySignInComponent } from './my-sign-in/my-sign-in.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { DpSectionComponent } from './dp-section/dp-section.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MyWallComponent } from './my-wall/my-wall.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonNavComponent,
    DashboardContentComponent,
    UserHomeComponent,
    AdminHomeComponent,
    DialogContentComponent,
    LoginWidgetComponent,
    MySignInComponent,
    SignInUpComponent,
    ProfileEditComponent,
    ProfileContentComponent,
    DpSectionComponent,
    FollowerListComponent,
    BlogPostComponent,
    SuggestionListComponent,
    PersonalInfoComponent,
    MyWallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  entryComponents: [
    MySignInComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fb),
    RouterModule,

  ],
  providers: [
    AdminAuthGuardService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

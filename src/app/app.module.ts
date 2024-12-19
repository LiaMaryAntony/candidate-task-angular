import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { employeeReducer } from "./store/reducers/employee.reducer";
import { EffectsModule } from "@ngrx/effects";
import { EmployeeEffects } from "./store/effects/employee.effects";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ employees: employeeReducer }),
    EffectsModule.forRoot([EmployeeEffects]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

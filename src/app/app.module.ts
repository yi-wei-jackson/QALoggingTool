import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DynFormComponent} from './components/dyn-form/dyn-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynFormGroupComponent} from './components/dyn-form/dyn-form-group/dyn-form-group.component';
import {DfiTextboxComponent} from './components/dyn-form/dyn-form-items/dfi-textbox.component';
import {WrapperComponent} from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DynFormComponent,
    DynFormGroupComponent,
    DfiTextboxComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProposComponent } from './propos/propos.component';
import { LoginComponent } from './user/login.component';






const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
     
     {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'add',
      component: AddComponent,
    },

     {
      path: 'list',
      component: ListComponent,
    },
     {
      path: 'update',
      component: UpdateComponent,
    },
    {
      path: 'name-editor',
      component: NameEditorComponent,
    },
    {
      path: 'produits',
      component: ProduitsComponent,
    },
    {
      path: 'propos',
      component: ProposComponent,
    },
     
     
    
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    NameEditorComponent,
    ProduitsComponent,
    ProposComponent,
    LoginComponent,
  
    
  
    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes, { enableTracing: true}
    ),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/page/all-task/all-task.component';
import { ImportantTasksComponent } from './components/page/important-tasks/important-tasks.component';
import path from 'path';
import { Component } from '@angular/core';
import { CompletedTasksComponent } from './components/page/completed-tasks/completed-tasks.component';

export const routes: Routes = [
    {
        path:"", component:AllTaskComponent
    },
    {
        path:"importants", component:ImportantTasksComponent
    },
   {
        path:"completed", component:CompletedTasksComponent
   }
];

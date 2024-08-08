import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [RouterModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}

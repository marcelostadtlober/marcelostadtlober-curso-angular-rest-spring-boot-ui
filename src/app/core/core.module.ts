import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { LancamentoService } from 'app/lancamentos/lancamento.service';
import { CategoriaService } from 'app/categorias/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    ErrorHandlerService
  ]
})
export class CoreModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarEliminarComponent } from './modal-confirmar-eliminar.component';

describe('ModalConfirmarEliminarComponent', () => {
  let component: ModalConfirmarEliminarComponent;
  let fixture: ComponentFixture<ModalConfirmarEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmarEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrescritorConsultarUsuariosComponent } from './prescritor-consultar-usuarios.component';

describe('PrescritorConsultarUsuariosComponent', () => {
  let component: PrescritorConsultarUsuariosComponent;
  let fixture: ComponentFixture<PrescritorConsultarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescritorConsultarUsuariosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrescritorConsultarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

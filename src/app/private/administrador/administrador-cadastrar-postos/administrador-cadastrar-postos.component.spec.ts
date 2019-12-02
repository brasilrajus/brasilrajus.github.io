import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministradorCadastrarPostosComponent } from './administrador-cadastrar-postos.component';

describe('AdministradorCadastrarPostosComponent', () => {
  let component: AdministradorCadastrarPostosComponent;
  let fixture: ComponentFixture<AdministradorCadastrarPostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorCadastrarPostosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradorCadastrarPostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

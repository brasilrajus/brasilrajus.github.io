import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostosDeAtendimentoComponent } from './postos-de-atendimento.component';

describe('PostosDeAtendimentoComponent', () => {
  let component: PostosDeAtendimentoComponent;
  let fixture: ComponentFixture<PostosDeAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostosDeAtendimentoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostosDeAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

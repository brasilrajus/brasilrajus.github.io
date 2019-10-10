import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostosAtendimentoComponent } from './postos-atendimento.component';

describe('PostosAtendimentoComponent', () => {
  let component: PostosAtendimentoComponent;
  let fixture: ComponentFixture<PostosAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostosAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostosAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

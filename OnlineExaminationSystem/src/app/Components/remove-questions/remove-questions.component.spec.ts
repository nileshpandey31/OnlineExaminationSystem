import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQuestionsComponent } from './remove-questions.component';

describe('RemoveQuestionsComponent', () => {
  let component: RemoveQuestionsComponent;
  let fixture: ComponentFixture<RemoveQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

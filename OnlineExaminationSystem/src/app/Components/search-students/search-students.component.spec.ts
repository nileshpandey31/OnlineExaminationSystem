import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentsComponent } from './search-students.component';

describe('SearchStudentsComponent', () => {
  let component: SearchStudentsComponent;
  let fixture: ComponentFixture<SearchStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

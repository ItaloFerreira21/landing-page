import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslatterFormComponent } from './newslatter-form.component';

describe('NewslatterFormComponent', () => {
  let component: NewslatterFormComponent;
  let fixture: ComponentFixture<NewslatterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewslatterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewslatterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

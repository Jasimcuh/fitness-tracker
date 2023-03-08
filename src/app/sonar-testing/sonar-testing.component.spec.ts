import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarTestingComponent } from './sonar-testing.component';

describe('SonarTestingComponent', () => {
  let component: SonarTestingComponent;
  let fixture: ComponentFixture<SonarTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonarTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonarTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

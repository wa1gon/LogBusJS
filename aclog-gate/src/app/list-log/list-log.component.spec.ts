import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogComponent } from './list-log.component';

describe('ListLogComponent', () => {
  let component: ListLogComponent;
  let fixture: ComponentFixture<ListLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

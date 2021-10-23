import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOfLifeDropdownComponent } from './tree-of-life-dropdown.component';

describe('TreeOfLifeDropdownComponent', () => {
  let component: TreeOfLifeDropdownComponent;
  let fixture: ComponentFixture<TreeOfLifeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeOfLifeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeOfLifeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

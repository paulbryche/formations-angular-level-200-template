import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticComponent } from './list-statistic.component';

fdescribe('ListStatisticComponent', () => {
  let component: ListStatisticComponent;
  let fixture: ComponentFixture<ListStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatisticComponent ],
      providers: [],
      imports: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    //fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 2 rows of statistics', () => {
    // Arrange
    component.items = ['', ''];

    // Act
    fixture.detectChanges();

    const dom = fixture.nativeElement;
    const table = dom.querySelector('table.table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
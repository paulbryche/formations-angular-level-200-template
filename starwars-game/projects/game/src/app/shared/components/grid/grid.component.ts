import { AfterContentInit, AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import { CellComponent } from './cell/cell.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'game-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgFor, CellComponent]
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
  private readonly application = inject(ApplicationRef);


  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }

  logView() {
  }

  onClick() {
    this.application.tick();
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}

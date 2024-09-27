import { Component, DoCheck, ElementRef, inject, NgZone, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, mergeMap, Observable, Subscription, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit, DoCheck, OnDestroy {
  private readonly zone = inject(NgZone);
  tiles: Tile[] = [];
  title = 'Titre';
  timer = '';
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart');
  private subscription = new Subscription();

  constructor(private tileService: TileService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    console.info('init ?');

    this.zone.runOutsideAngular(( )=> {
      setTimeout(() => {
        this.title = 'Démarrer la partie'; // le template ne verra ce changement

        this.zone.run(() => {
          //this.title = 'Test de la partie';
        });
      }, 1000);
    });

    // interval(1000).subscribe(item => {

    // })
    const observableEnfante$ = interval(1000);

    const obs$ = fromEvent(this.btnStart()?.nativeElement!, 'click');
    const sub = obs$.pipe(
      tap(item => console.info('item', item)),
      // concatMap(tick => observableEnfante$.pipe(take(20))),
      //      mergeMap(tick => observableEnfante$),
      switchMap(tick => observableEnfante$),

    ).subscribe({
      next: item => this.timer = item.toString()
    });

    this.subscription.add(sub);


    this.tileService.loadAll()
                    .subscribe(tiles => this.tiles = tiles);
  }

}

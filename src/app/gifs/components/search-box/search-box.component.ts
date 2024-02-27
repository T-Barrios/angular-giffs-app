import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."

    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log(this.gifsService.tagsHistory);

  }

}

// version antigua para poder obtener el valor del input
// la version que esta ahora usa el decorador @ViewCHild
// 1. dentro del input en el html
// (keyup.enter)="searchTag(txtTagInput.value)"
//     #txtTagInput
// 2. en la clase como metodo
// searchTag( newTag: string ) {
//   console.log({newTag});
// }

import { Component } from '@angular/core';

@Component({
    selector: 'multiselector',
    templateUrl: './multiselector.component.html'
})
export class MultiSelectorComponent {
    items: string[] = [
        "HAIMA",
        "2019",
        "M3"
    ];

    addItem() {
        this.items.push('note');
    }
}
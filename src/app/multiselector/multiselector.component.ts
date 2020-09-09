import { Component } from '@angular/core';

@Component({
    selector: 'multiselector',
    templateUrl: './multiselector.component.html'
})
export class MultiSelectorComponent {
    items: string[] = [
        "One",
        "Two",
        "Three"
    ];

    addItem() {
        this.items.push('note');
    }
}
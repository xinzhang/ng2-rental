import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightDirective {
    private _el: HTMLElement;
    private _defaultColor = 'red';

    @Input('myHighlight') highlightColor: string;
    
    @Input() set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
        
        
    }
    
    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    onMouseEnter() {
        this._highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this._highlight(null);
    }

    private _highlight(color: string) {
        this._el.style.backgroundColor = color;
    }

}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  generateRandomColor(counter: number) {
    const colors = ['amber','red', 'blue', 'green'];
    return colors[counter % colors.length];
  }

  generateTailwindClass(color : string, type: string): string {
    const colorName = color.toLowerCase();

    let tailwindClass;
    switch (type) {
      case 'bg':
        tailwindClass = color == 'amber' ? `amber-bg` : color === 'red' ? 'red-bg' : color === 'green' ? 'green-bg' : 'blue-bg';
        break;
      case 'text':
        tailwindClass = color == 'amber' ? `amber-text` : color === 'red' ? 'red-text' : color === 'green' ? 'green-text' : 'blue-text';
        break;
      case 'border':
        tailwindClass = color == 'amber' ? `amber-border` : color === 'red' ? 'red-border' : color === 'green' ? 'green-border' : 'blue-border';
        break;
      default:
        tailwindClass = '';
        console.warn('Invalid type provided. Use "bg", "text", or "border".');
    }
    return tailwindClass;
  }
}
